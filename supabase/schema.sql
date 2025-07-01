-- SurveyLink Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    user_type TEXT CHECK (user_type IN ('surveyor', 'buyer', 'admin')) NOT NULL,
    phone TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Surveyor profiles
CREATE TABLE surveyor_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    professional_title TEXT NOT NULL,
    license_number TEXT NOT NULL,
    years_experience INTEGER NOT NULL,
    bio TEXT,
    specializations TEXT[],
    languages TEXT[],
    city TEXT NOT NULL,
    region TEXT NOT NULL,
    service_areas TEXT[],
    base_rate DECIMAL(10,2),
    currency TEXT DEFAULT 'EUR',
    total_surveys INTEGER DEFAULT 0,
    average_rating DECIMAL(3,2) DEFAULT 0,
    is_verified BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Survey requests
CREATE TABLE survey_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    buyer_id UUID REFERENCES users(id),
    surveyor_id UUID REFERENCES users(id),
    property_address TEXT NOT NULL,
    property_type TEXT NOT NULL,
    survey_type TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    quoted_price DECIMAL(10,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    survey_request_id UUID REFERENCES survey_requests(id),
    surveyor_id UUID REFERENCES users(id),
    buyer_id UUID REFERENCES users(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    review_text TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_surveyor_profiles_city ON surveyor_profiles(city);
CREATE INDEX idx_surveyor_profiles_region ON surveyor_profiles(region);
CREATE INDEX idx_surveyor_profiles_is_active ON surveyor_profiles(is_active);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE surveyor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE survey_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Everyone can view active surveyors
CREATE POLICY "Public can view active surveyors" ON surveyor_profiles
    FOR SELECT USING (is_active = true);

-- Users can view their own data
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT USING (auth.uid() = id);

-- Insert sample surveyor for testing
INSERT INTO users (id, email, full_name, user_type, phone)
VALUES ('11111111-1111-1111-1111-111111111111', 'demo@surveylink.com', 'Mario Rossi', 'surveyor', '+39 333 1234567');

INSERT INTO surveyor_profiles (
    user_id, professional_title, license_number, years_experience,
    bio, specializations, languages, city, region, service_areas,
    base_rate, is_verified, is_active
)
VALUES (
    '11111111-1111-1111-1111-111111111111',
    'Geometra Professionista',
    'MI-12345',
    15,
    'Esperto in perizie residenziali e commerciali con 15 anni di esperienza.',
    ARRAY['Residenziale', 'Commerciale', 'Certificazioni Energetiche'],
    ARRAY['Italiano', 'Inglese'],
    'Milano',
    'Lombardia',
    ARRAY['Milano', 'Monza', 'Como'],
    850.00,
    true,
    true
);

from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password_hash = Column(String)
    name = Column(String)
    license_number = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    bpo_reports = relationship("BPOReport", back_populates="user")

class BPOReport(Base):
    __tablename__ = "bpo_reports"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    address = Column(String)
    status = Column(String, default="draft") # draft, completed
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    cost_cents = Column(Integer, default=0)

    user = relationship("User", back_populates="bpo_reports")
    property = relationship("Property", back_populates="bpo_report", uselist=False)
    comparables = relationship("Comparable", back_populates="bpo_report")

class Property(Base):
    __tablename__ = "properties"

    id = Column(Integer, primary_key=True, index=True)
    bpo_report_id = Column(Integer, ForeignKey("bpo_reports.id"))
    address = Column(String)
    beds = Column(Integer)
    baths = Column(Float)
    sqft = Column(Integer)
    year_built = Column(Integer)
    tax_assessment = Column(Float)
    avm_value = Column(Float)

    bpo_report = relationship("BPOReport", back_populates="property")

class Comparable(Base):
    __tablename__ = "comparables"

    id = Column(Integer, primary_key=True, index=True)
    bpo_report_id = Column(Integer, ForeignKey("bpo_reports.id"))
    address = Column(String)
    sale_price = Column(Float)
    sale_date = Column(DateTime)
    sqft = Column(Integer)
    distance_miles = Column(Float)
    similarity_score = Column(Float)

    bpo_report = relationship("BPOReport", back_populates="comparables")

from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class ComparableBase(BaseModel):
    address: str
    sale_price: float
    sale_date: datetime
    sqft: int
    distance_miles: float
    similarity_score: float

class ComparableCreate(ComparableBase):
    pass

class Comparable(ComparableBase):
    id: int
    bpo_report_id: int

    class Config:
        from_attributes = True

class PropertyBase(BaseModel):
    address: str
    beds: int
    baths: float
    sqft: int
    year_built: int
    tax_assessment: float
    avm_value: float

class PropertyCreate(PropertyBase):
    pass

class Property(PropertyBase):
    id: int
    bpo_report_id: int

    class Config:
        from_attributes = True

class BPOReportBase(BaseModel):
    address: str
    status: str = "draft"

class BPOReportCreate(BPOReportBase):
    pass

class BPOReport(BPOReportBase):
    id: int
    user_id: int
    created_at: datetime
    cost_cents: int
    property: Optional[Property] = None
    comparables: List[Comparable] = []

    class Config:
        from_attributes = True

class PropertyLookupRequest(BaseModel):
    address: str

class PropertyLookupResponse(BaseModel):
    property: PropertyBase
    comparables: List[ComparableBase]

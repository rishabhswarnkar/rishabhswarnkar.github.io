from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import schemas
from datetime import datetime, timedelta

router = APIRouter()

@router.post("/property/lookup", response_model=schemas.PropertyLookupResponse)
async def lookup_property(request: schemas.PropertyLookupRequest, db: Session = Depends(get_db)):
    # Mock data simulation for RentCast API
    mock_property = schemas.PropertyBase(
        address=request.address,
        beds=3,
        baths=2.0,
        sqft=1500,
        year_built=1990,
        tax_assessment=500000.0,
        avm_value=550000.0
    )

    mock_comparables = []
    for i in range(1, 7):
        mock_comparables.append(
            schemas.ComparableBase(
                address=f"{100+i} Nearby St",
                sale_price=530000.0 + (i * 5000),
                sale_date=datetime.now() - timedelta(days=i*10),
                sqft=1450 + (i * 10),
                distance_miles=0.1 * i,
                similarity_score=95.0 - i
            )
        )
    
    return schemas.PropertyLookupResponse(
        property=mock_property,
        comparables=mock_comparables
    )

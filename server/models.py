# from sqlalchemy_serializer import SerializerMixin
# from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy import func

from config import db

# Models go here!
class TenantInfo(db.Model):
    __tablename__ = 'tenant_infos'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=func.now(), nullable=False)
    address = db.Column(db.String, nullable=False)
    apartment = db.Column(db.String, nullable=False)
    t1Name = db.Column(db.String, nullable=False)
    t1DOB = db.Column(db.Date, nullable=False)
    t1cellNumber = db.Column(db.String, nullable=False)
    t1email = db.Column(db.String, nullable=False)
    t1employer = db.Column(db.String, nullable=True)
    t1workAddress = db.Column(db.String, nullable=True)
    t1workNumber = db.Column(db.Integer, nullable=True)
    t2Name = db.Column(db.String, nullable=True)
    t2DOB = db.Column(db.Date, nullable=True)
    t2cellNumber = db.Column(db.String, nullable=True)
    t2email = db.Column(db.String, nullable=True)
    t2employer = db.Column(db.String, nullable=True)
    t2workAddress = db.Column(db.String, nullable=True)
    t2workNumber = db.Column(db.String, nullable=True)
    o1name = db.Column(db.String, nullable=True)
    o1age = db.Column(db.Integer, nullable=True)
    o2name = db.Column(db.String, nullable=True)
    o2age = db.Column(db.Integer, nullable=True)
    o3name = db.Column(db.String, nullable=True)
    o3age = db.Column(db.Integer, nullable=True)
    o4name = db.Column(db.String, nullable=True)
    o4age = db.Column(db.Integer, nullable=True)
    o5name = db.Column(db.String, nullable=True)
    o5age = db.Column(db.Integer, nullable=True)
    emergencyName = db.Column(db.String, nullable=False)
    emergencyPhone = db.Column(db.String, nullable=False)
    emergencyAddress = db.Column(db.String, nullable=False)
    t1signature = db.Column(db.String, nullable=False)
    t2signature = db.Column(db.String, nullable=True)

class TenantReceipt(db.Model):
    __tablename__ = 'tenant_receipts'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=func.now(), nullable=False)
    address = db.Column(db.String, nullable=False)
    item = db.Column(db.Integer, nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    subtotal = db.Column(db.Integer, nullable=False)
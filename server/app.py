#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource
from models import TenantInfo, TenantReceipt
from datetime import datetime

# Local imports
from config import app, db, api
# Add your model imports


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class TenantReceipts(Resource):
    def post(self):
        params = request.json
        try:
            tenant_receipt = TenantReceipt(
                address = params.get('address'),
                item = params.get('item'),
                amount = params.get('amount'),
                subtotal = params.get('subtotal')
            )
            db.session.add(tenant_receipt)
            db.session.commit()
            return make_response(tenant_receipt.to_dict(), 201)
        except Exception as e:
            print(e)
            return make_response({"error": str(e)}, 400)
api.add_resource(TenantReceipts, '/tenant_receipts')


class TenantInfos(Resource):
    def post(self):
        params = request.json

        def parse_date(date_str):
            if date_str:
                return datetime.strptime(date_str, '%Y-%m-%d').date()
            return None
        
        try:
            tenant_info = TenantInfo(
                address=params.get('address'),
                apartment=params.get('apartment'),
                t1Name=params.get('t1Name'),
                t1DOB=parse_date(params.get('t1DOB')),
                t1cellNumber=params.get('t1cellNumber'),
                t1email=params.get('t1email'),
                t1employer=params.get('t1employer'),
                t1workAddress=params.get('t1workAddress'),
                t1workNumber=params.get('t1workNumber'),
                t2Name=params.get('t2Name'),
                t2DOB=parse_date(params.get('t2DOB')),
                t2cellNumber=params.get('t2cellNumber'),
                t2email=params.get('t2email'),
                t2employer=params.get('t2employer'),
                t2workAddress=params.get('t2workAddress'),
                t2workNumber=params.get('t2workNumber'),
                o1name=params.get('o1name'),
                o1age=params.get('o1age'),
                o2name=params.get('o2name'),
                o2age=params.get('o2age'),
                o3name=params.get('o3name'),
                o3age=params.get('o3age'),
                o4name=params.get('o4name'),
                o4age=params.get('o4age'),
                o5name=params.get('o5name'),
                o5age=params.get('o5age'),
                emergencyName=params.get('emergencyName'),
                emergencyPhone=params.get('emergencyPhone'),
                emergencyAddress=params.get('emergencyAddress'),
                t1signature=params.get('t1signature'),
                t2signature=params.get('t2signature')
            )
            db.session.add(tenant_info)
            db.session.commit()
            return make_response(tenant_info.to_dict(), 201)
        except Exception as e:
            print(e)
            return make_response({"error": str(e)}, 400)
api.add_resource(TenantInfos, '/tenant_infos')

        



if __name__ == '__main__':
    app.run(port=5555, debug=True)


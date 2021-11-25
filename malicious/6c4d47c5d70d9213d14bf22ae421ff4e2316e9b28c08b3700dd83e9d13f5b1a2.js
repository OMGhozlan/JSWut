'use strict';

const joi = require('@hapi/joi');
const config = require('../../../../config');
const http = require('axios');
const commonObject = require('../../CommonFunctions');
const COREAUTO_IND_API = config.externals.COREAUTO_IND_API;
const Log = require('../../../../errorLog');
const boom = require('@hapi/boom');
const moment = require('moment');
const logger = require('../../../../bunyanlogger').child({
  module: 'CreateReplacementOrder'
});

/**
 * [CreateReplacementOrder description]
 */
const CreateReplacementOrder = async (obj, logfilename) => {
  try {
    let loggerObj = {
      source: obj.source,
      scheduler: logfilename,
      functionName: 'CreateReplacementOrder',
      createdDate: moment().tz('Asia/Kolkata').format('LLL')
    };
    loggerObj.API_Request_Time = moment().format('MMMM Do YYYY, h:mm:ss a');
    let reqobj = {
      poid: obj.poid,
      poitemid: obj.poitemid,
      productid: obj.productid,
      quantity: obj.quantity,
      fcauthkey: 'qwedfgvbn18piifghmnvjjkddyrwlkj',
    };
    let getOrderURL = COREAUTO_IND_API + '/Services/CoreInd.svc/GetOrderForReplacement';
    let getresult = await commonObject.getCoreAPIResponse(reqobj, getOrderURL, logfilename);
    getresult = JSON.parse(getresult) || [];
    if (getresult.length) {
      let replacementobj = {
        pOrder: {
          BillEmailAddress: getresult[0].BillEmailAddress || '',
          UserID: getresult[0].UserID || '',
          ShipFirstName: getresult[0].ShipFirstName || '',
          ShipMiddelName: getresult[0].ShipMiddelName || '',
          ShipLastName: getresult[0].ShipLastName || '',
          Instructions: getresult[0].Instructions || '',
          ShipMobileNo: getresult[0].ShipMobileNo || '',
          ShipAddressLine1: getresult[0].ShipAddressLine1 || '',
          ShipAddressLine2: getresult[0].ShipAddressLine2 || '',
          ShipAddressLine3: getresult[0].ShipAddressLine3 || '',
          ShipPhoneNo: getresult[0].ShipPhoneNo || '',
          ShipCity: getresult[0].ShipCity || '',
          ShipState: getresult[0].ShipState || '',
          ShipCountry: getresult[0].ShipCountry || '',
          ShipPinCode: getresult[0].ShipPinCode || '',
          BillFirstName: getresult[0].BillFirstName || '',
          BillMiddelName: getresult[0].BillMiddelName || '',
          BillLastName: getresult[0].BillLastName || '',
          BillMobileNo: getresult[0].BillMobileNo || '',
          BillAddressLine1: getresult[0].BillAddressLine1 || '',
          BillAddressLine2: getresult[0].BillAddressLine2 || '',
          BillAddressLine3: getresult[0].BillAddressLine3 || '',
          BillPhoneNo: getresult[0].BillPhoneNo || '',
          BillCity: getresult[0].BillCity || '',
          BillState: getresult[0].BillState || '',               // not in payload
          BillCountry: getresult[0].BillCountry || '',
          BillPinCode: getresult[0].BillPinCode || '',
          CouponCode: getresult[0].CouponCode || '',
          GiftCertificateCode: getresult[0].GiftCertificateCode || '',
          RedeemLoyaltyAmount: getresult[0].RedeemLoyaltyAmount || 0,
          PaymentTypeID: getresult[0].PaymentTypeID || 0,
          WalletAmount: getresult[0].WalletAmount || 0,
          CustomerNumber: getresult[0].CustomerNumber || '',
          ReferralCode: getresult[0].ReferralCode || '',
          ReferedBy: getresult[0].ReferedBy || '',
          TotalPayment: getresult[0].TotalPayment || 0,
          CouponDiscount: getresult[0].CouponDiscount || 0,
          GiftCertificateAmount: getresult[0].GiftCertificateAmount || 0,
          GlGiftCertificateCode: getresult[0].GLGiftCertificateCode || '',
          GlCouponCode: getresult[0].GlCouponCode || '',
          GlCouponDiscount: getresult[0].GlCouponDiscount || 0,
          GlGiftCertificateAmount: getresult[0].GlGiftCertificateAmount || 0,
          TotalItems: 1,
          TotalQuantity: 1,
          PaymentTypeActualID: getresult[0].PaymentTypeActualID || 0,
          PaymentStatusID: getresult[0].PaymentStatusID || 0,
          PurchaseOrderItemList: [
            {
              ProductID: getresult[0].ProductID || '',
              ProductInfoID: getresult[0].ProductInfoID || '',
              ManufactureBarcode: getresult[0].ManufactureBarcode || '',
              ProductName: getresult[0].ProductName || '',
              ProductDesc: getresult[0].ProductDesc || '',
              BrandID: getresult[0].BrandID || 0,
              SubCatID: getresult[0].SubCatID || 0,
              CatID: getresult[0].CatID || 0,
              Size: getresult[0].Size || '',
              Unit: getresult[0].Unit || '',
              Color: getresult[0].Color || '',
              MRP: getresult[0].MRP || 0,
              Discount: getresult[0].Discount || 0,
              ActualPrice: getresult[0].ActualPrice || 0,
              Quantity: getresult[0].Quantity || 0,
              TotalPrice: getresult[0].TotalPrice || 0,
              Onsale: getresult[0].Onsale,
              OfferType: getresult[0].OfferType || '',
              GroupID: getresult[0].GroupID || '',
              UserID: getresult[0].UserID || '',
              InvoiceLevelDiscount: getresult[0].InvoiceLevelDiscount || 0,
              SiteType: getresult[0].SiteType || 0,
              CartOfferComments: getresult[0].CartOfferComments || '',
              LoyaltyCash: getresult[0].LoyaltyCash || 0,
              EmailAddress: getresult[0].EmailAddress || '',
              DiscountType: getresult[0].DiscountType || '',
              DiscountInPer: getresult[0].DiscountInPer || 0,
              EDDate: getresult[0].ExpiryDate || '',
              NextDayDelivery: getresult[0].NextDayDelivery,
              SameDayDelivery: getresult[0].SameDayDelivery,
              TryNBuy: getresult[0].TryNBuy,
              ConCharges: getresult[0].ConCharges || 0,
              ConvenienceCharge: getresult[0].ConvenienceCharge || '0',
              GiftCertificateDiscount: getresult[0].GiftCertificateDiscount || 0,
              WalletAmountDiscount: getresult[0].WalletAmountDiscount || 0,
              BurnLoyaltyCashDiscount: getresult[0].BurnLoyaltyCashDiscount || 0,
              GiftDiscount: getresult[0].GiftDiscount || 0,
              BrandName: getresult[0].BrandName || '',
              AgeFrom: getresult[0].AgeFrom,
              AgeTo: getresult[0].AgeTo,
              InvoiceDiscountAmount: getresult[0].InvoiceDiscountAmount || 0,
              HSNCode: getresult[0].HSNCode || '',
              SGST: getresult[0].SGST || 0,
              CGST: getresult[0].CGST || 0,
              IGST: getresult[0].IGST || 0,
              GSTType: getresult[0].GSTType || 'S',
              DiscountOnGst: getresult[0].DiscountOnGST || '',
              ExpiryDate: getresult[0].ExpiryDate || '',
              DispatchHrs: getresult[0].DispatchHrs || '',
              orderitemgroupid: getresult[0].OrderItemGroupId || '0',
              warehouseid: getresult[0].WarehouseID || '0',
              isjitdrop: getresult[0].IsJitDrop || '0',
              IsReturnAble: getresult[0].IsReturnAble || 0,
              Shippingcutoffdatetime: getresult[0].Shippingcutoffdatetime || '',
              NonClubDiscountDifference: getresult[0].NonClubDiscountDifference || 0,
              ProductDefaultDiscount: getresult[0].ProductDefaultDiscount || 0,
              debitcardnetbankingwallet: getresult[0].debitcardnetbankingwallet1 || 0,
              creditcardwallet: getresult[0].creditcardwallet1 || 0,
              thirdpartywallet: getresult[0].thirdpartywallet1 || 0,
              courierid: getresult[0].courierid || 0,
              vendorcode: getresult[0].vendorcode || '',
              codcharge: getresult[0].codcharge || 0
            }
          ],
          Status: getresult[0].Status || 'Pending',
          ShippingCharges: getresult[0].ShippingCharges || '0',
          GiftWrapCharges: getresult[0].GiftWrapCharges || '0',
          EmiCharges: getresult[0].EmiCharges || '0',
          CodCharges: getresult[0].CODCharges || '0',
          GiftWrapInstructions: getresult[0].GiftWrapInstructions || '',
          TotalTax: getresult[0].TotalTax || '0',
          NetPayment: getresult[0].NetPayment || '0',
          PreferredCourier: getresult[0].PreferredCourier || '',
          SiteType: getresult[0].SiteType || '0',
          ProductType: getresult[0].ProductType || '0',
          AddressID: getresult[0].AddressID || '0',
          ShipChargePaid: getresult[0].ShippingChargePaid || '0',
          CODChargePaid: getresult[0].CODChargePaid || '0',
          CashBackAmount: getresult[0].CashBackAmount || '0',
          TotalVatAmount: getresult[0].TotalVatAmount || '0',
          ShipChargePaidByWL: getresult[0].ShipChargesPaidByWL || '0',
          CodChargePaidByWL: getresult[0].CodChargePaidByWL || '0',
          PaymentReferenceId: getresult[0].PaymentReferenceId || '0',
          OrderLevelLoyaltyCashPoints: getresult[0].OrderLevelLoyaltyCashPoints || '0',
          debitcardnetbankingwallet: getresult[0].debitcardnetbankingwallet || '0',
          IsFCClub: getresult[0].IsFCClub || '0',
          LoyaltyCashFactor: getresult[0].LoyaltyCashFactor || '0',
          ShippingChargesFreeFor: getresult[0].ShippingChargesFreeFor || '',
          creditcardwallet: getresult[0].creditcardwallet || '0',
          thirdpartywallet: getresult[0].thirdpartywallet || '0',
          orderdetailshorturl: getresult[0].orderdetailshorturl || '',
          ClientID: getresult[0].ClientID || '',
        }
      };


      console.log('replacementobj',replacementobj);
      return 'success';
      const headers = {
        'Content-Type': 'application/json'
      };
      let APIURL = `${config.externals.ReplacementPlaceOrder}/saveorder/SaveOrderService.svc/json/CreateReplacementOrder`;
      let response = await http({
        method: 'post',
        url: APIURL,
        data: replacementobj,
        headers: headers
      });
      loggerObj.API_URL = APIURL;
      loggerObj.requestObj = replacementobj;
      loggerObj.API_Response_Time = moment().format('MMMM Do YYYY, h:mm:ss a');
      loggerObj.response = response.data;
      logger.info({log_type:'crm_executionlog',infoLog:loggerObj});
      Log.createDataPushLog('ReplacementPlaceOrder', JSON.stringify(loggerObj));
      let resp = response.data;
      resp.status = true;
      resp.msg = 'success';
      return resp;
    } else {
      return ({
        status: false,
        msg: 'Order Data Not found'
      });
    }
  } catch (DBException) {
    return Promise.reject(new Error(DBException));
  }
};

const CreateReplacementOrderAPI = {
  description: 'Create Replacement Order',
  notes: ['Create Replacement Order'],
  tags: ['api', 'CreateReplacementOrder'],
  validate: {
    payload: joi.object().required().keys({
      poid: joi.string().trim().required(),
      poitemid: joi.string().trim().required(),
      productid: joi.string().trim().required(),
      quantity: joi.number().required(),
      source: joi.string().trim().required(),
    })
  },
  handler: async (req) => {
    try {
      let SchedulerlogName = 'OSR/ReplacementPlaceOrder/'+moment().tz('Asia/Kolkata').format('DD-MM-YYYY');
      return await CreateReplacementOrder(req.payload, SchedulerlogName);
    } catch (DBException) {
      logger.error({error:`Error in CreateReplacementOrder function${DBException.message}`,crm_req:req}, DBException.message);
      return boom.expectationFailed(DBException);
    }
  }
};

exports.CreateReplacementOrder = CreateReplacementOrder;
exports.routes = [{
  method: 'POST',
  path: '/replacement/createorder',
  config: CreateReplacementOrderAPI
}];

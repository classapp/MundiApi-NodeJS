/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const ListSubscriptionsResponse = require('../lib/Models/ListSubscriptionsResponse');
const UpdatePriceBracketRequest = require('../lib/Models/UpdatePriceBracketRequest');
const GetPlanResponse = require('../lib/Models/GetPlanResponse');
const CreatePhonesRequest = require('../lib/Models/CreatePhonesRequest');
const UpdateMetadataRequest = require('../lib/Models/UpdateMetadataRequest');
const GetCheckoutPaymentSettingsResponse =
  require('../lib/Models/GetCheckoutPaymentSettingsResponse');
const UpdateCustomerRequest = require('../lib/Models/UpdateCustomerRequest');
const CreateBoletoPaymentRequest = require('../lib/Models/CreateBoletoPaymentRequest');
const CreateDiscountRequest = require('../lib/Models/CreateDiscountRequest');
const CreateIncrementRequest = require('../lib/Models/CreateIncrementRequest');
const ListIncrementsResponse = require('../lib/Models/ListIncrementsResponse');
const GetGatewayResponseResponse = require('../lib/Models/GetGatewayResponseResponse');
const GetPaymentAuthenticationResponse = require('../lib/Models/GetPaymentAuthenticationResponse');
const UpdateSubscriptionPaymentMethodRequest =
  require('../lib/Models/UpdateSubscriptionPaymentMethodRequest');
const GetCheckoutBoletoPaymentResponse = require('../lib/Models/GetCheckoutBoletoPaymentResponse');
const UpdateSubscriptionItemRequest = require('../lib/Models/UpdateSubscriptionItemRequest');
const CreateSetupRequest = require('../lib/Models/CreateSetupRequest');
const CreatePricingSchemeRequest = require('../lib/Models/CreatePricingSchemeRequest');
const UpdatePricingSchemeRequest = require('../lib/Models/UpdatePricingSchemeRequest');
const GetPlanItemResponse = require('../lib/Models/GetPlanItemResponse');
const GetBankTransferTransactionResponse =
  require('../lib/Models/GetBankTransferTransactionResponse');
const GetTransferResponse = require('../lib/Models/GetTransferResponse');
const CreateSubscriptionItemRequest = require('../lib/Models/CreateSubscriptionItemRequest');
const CreateSubscriptionRequest = require('../lib/Models/CreateSubscriptionRequest');
const CreateOrderRequest = require('../lib/Models/CreateOrderRequest');
const CreateRecipientRequest = require('../lib/Models/CreateRecipientRequest');
const CreateDebitCardPaymentRequest = require('../lib/Models/CreateDebitCardPaymentRequest');
const GetDebitCardTransactionResponse = require('../lib/Models/GetDebitCardTransactionResponse');
const CreateOrderItemRequest = require('../lib/Models/CreateOrderItemRequest');
const GetTransactionReportFileResponse = require('../lib/Models/GetTransactionReportFileResponse');
const CreateCardOptionsRequest = require('../lib/Models/CreateCardOptionsRequest');
const GetPhoneResponse = require('../lib/Models/GetPhoneResponse');
const CreateCardTokenRequest = require('../lib/Models/CreateCardTokenRequest');
const GetTokenResponse = require('../lib/Models/GetTokenResponse');
const GetRecipientResponse = require('../lib/Models/GetRecipientResponse');
const GetIncrementResponse = require('../lib/Models/GetIncrementResponse');
const GetPeriodResponse = require('../lib/Models/GetPeriodResponse');
const UpdateChargePaymentMethodRequest = require('../lib/Models/UpdateChargePaymentMethodRequest');
const GetTransactionResponse = require('../lib/Models/GetTransactionResponse');
const GetCheckoutPaymentResponse = require('../lib/Models/GetCheckoutPaymentResponse');
const CreateCardRequest = require('../lib/Models/CreateCardRequest');
const GetAccessTokenResponse = require('../lib/Models/GetAccessTokenResponse');
const ListChargesResponse = require('../lib/Models/ListChargesResponse');
const GetOrderResponse = require('../lib/Models/GetOrderResponse');
const CreatePlanItemRequest = require('../lib/Models/CreatePlanItemRequest');
const GetBillingAddressResponse = require('../lib/Models/GetBillingAddressResponse');
const CreateApplePayHeaderRequest = require('../lib/Models/CreateApplePayHeaderRequest');
const CreateChargeRequest = require('../lib/Models/CreateChargeRequest');
const CreateCustomerRequest = require('../lib/Models/CreateCustomerRequest');
const CreateCancelSubscriptionRequest = require('../lib/Models/CreateCancelSubscriptionRequest');
const ListAccessTokensResponse = require('../lib/Models/ListAccessTokensResponse');
const CreateTransferRequest = require('../lib/Models/CreateTransferRequest');
const ListRecipientResponse = require('../lib/Models/ListRecipientResponse');
const GetBalanceResponse = require('../lib/Models/GetBalanceResponse');
const GetUsageResponse = require('../lib/Models/GetUsageResponse');
const CreateCreditCardPaymentRequest = require('../lib/Models/CreateCreditCardPaymentRequest');
const ListDiscountsResponse = require('../lib/Models/ListDiscountsResponse');
const CreateUsageRequest = require('../lib/Models/CreateUsageRequest');
const GetSubscriptionResponse = require('../lib/Models/GetSubscriptionResponse');
const GetSubscriptionItemResponse = require('../lib/Models/GetSubscriptionItemResponse');
const GetCardResponse = require('../lib/Models/GetCardResponse');
const GetSplitResponse = require('../lib/Models/GetSplitResponse');
const CreateCheckoutPaymentRequest = require('../lib/Models/CreateCheckoutPaymentRequest');
const CreateCheckoutBankTransferRequest =
  require('../lib/Models/CreateCheckoutBankTransferRequest');
const ListPlansResponse = require('../lib/Models/ListPlansResponse');
const CreateAccessTokenRequest = require('../lib/Models/CreateAccessTokenRequest');
const GetDiscountResponse = require('../lib/Models/GetDiscountResponse');
const GetVoucherTransactionResponse = require('../lib/Models/GetVoucherTransactionResponse');
const CreateTokenRequest = require('../lib/Models/CreateTokenRequest');
const UpdateInvoiceStatusRequest = require('../lib/Models/UpdateInvoiceStatusRequest');
const UpdateAddressRequest = require('../lib/Models/UpdateAddressRequest');
const GetBoletoTransactionResponse = require('../lib/Models/GetBoletoTransactionResponse');
const GetInvoiceItemResponse = require('../lib/Models/GetInvoiceItemResponse');
const GetCheckoutCreditCardPaymentResponse =
  require('../lib/Models/GetCheckoutCreditCardPaymentResponse');
const UpdateCardRequest = require('../lib/Models/UpdateCardRequest');
const GetSetupResponse = require('../lib/Models/GetSetupResponse');
const CreatePlanRequest = require('../lib/Models/CreatePlanRequest');
const CreateVoucherPaymentRequest = require('../lib/Models/CreateVoucherPaymentRequest');
const CreateBankTransferPaymentRequest = require('../lib/Models/CreateBankTransferPaymentRequest');
const CreateShippingRequest = require('../lib/Models/CreateShippingRequest');
const GetShippingResponse = require('../lib/Models/GetShippingResponse');
const CreateSplitRequest = require('../lib/Models/CreateSplitRequest');
const CreateInvoiceRequest = require('../lib/Models/CreateInvoiceRequest');
const UpdateSubscriptionBillingDateRequest =
  require('../lib/Models/UpdateSubscriptionBillingDateRequest');
const ListAddressesResponse = require('../lib/Models/ListAddressesResponse');
const GetGatewayErrorResponse = require('../lib/Models/GetGatewayErrorResponse');
const CreatePeriodRequest = require('../lib/Models/CreatePeriodRequest');
const CreateCheckoutCreditCardPaymentRequest =
  require('../lib/Models/CreateCheckoutCreditCardPaymentRequest');
const CreateAntifraudRequest = require('../lib/Models/CreateAntifraudRequest');
const GetAntifraudResponse = require('../lib/Models/GetAntifraudResponse');
const UpdatePlanItemRequest = require('../lib/Models/UpdatePlanItemRequest');
const CreateAddressRequest = require('../lib/Models/CreateAddressRequest');
const GetAnticipationLimitsResponse = require('../lib/Models/GetAnticipationLimitsResponse');
const UpdateSubscriptionAffiliationIdRequest =
  require('../lib/Models/UpdateSubscriptionAffiliationIdRequest');
const CreateCashPaymentRequest = require('../lib/Models/CreateCashPaymentRequest');
const CreateConfirmPaymentRequest = require('../lib/Models/CreateConfirmPaymentRequest');
const GetCashTransactionResponse = require('../lib/Models/GetCashTransactionResponse');
const UpdateCurrentCycleStatusRequest = require('../lib/Models/UpdateCurrentCycleStatusRequest');
const GetCheckoutBankTransferPaymentResponse =
  require('../lib/Models/GetCheckoutBankTransferPaymentResponse');
const GetCheckoutCardInstallmentOptionsResponse =
  require('../lib/Models/GetCheckoutCardInstallmentOptionsResponse');
const ListSubscriptionItemsResponse = require('../lib/Models/ListSubscriptionItemsResponse');
const UpdateSubscriptionCardRequest = require('../lib/Models/UpdateSubscriptionCardRequest');
const GetCustomerResponse = require('../lib/Models/GetCustomerResponse');
const CreatePhoneRequest = require('../lib/Models/CreatePhoneRequest');
const GetPhonesResponse = require('../lib/Models/GetPhonesResponse');
const CreateCaptureChargeRequest = require('../lib/Models/CreateCaptureChargeRequest');
const GetSafetyPayTransactionResponse = require('../lib/Models/GetSafetyPayTransactionResponse');
const ListTransferResponse = require('../lib/Models/ListTransferResponse');
const GetDeviceResponse = require('../lib/Models/GetDeviceResponse');
const UpdateOrderItemRequest = require('../lib/Models/UpdateOrderItemRequest');
const ListUsagesDetailsResponse = require('../lib/Models/ListUsagesDetailsResponse');
const CreateTransferSettingsRequest = require('../lib/Models/CreateTransferSettingsRequest');
const CreateTransactionReportFileRequest =
  require('../lib/Models/CreateTransactionReportFileRequest');
const ListTransactionsFilesResponse = require('../lib/Models/ListTransactionsFilesResponse');
const CreateGooglePayRequest = require('../lib/Models/CreateGooglePayRequest');
const UpdateChargeDueDateRequest = require('../lib/Models/UpdateChargeDueDateRequest');
const ListCustomersResponse = require('../lib/Models/ListCustomersResponse');
const GetPricingSchemeResponse = require('../lib/Models/GetPricingSchemeResponse');
const UpdateRecipientBankAccountRequest =
  require('../lib/Models/UpdateRecipientBankAccountRequest');
const CreateThreeDSecureRequest = require('../lib/Models/CreateThreeDSecureRequest');
const GetCreditCardTransactionResponse = require('../lib/Models/GetCreditCardTransactionResponse');
const CreateCardPaymentContactlessRequest =
  require('../lib/Models/CreateCardPaymentContactlessRequest');
const GetBankAccountResponse = require('../lib/Models/GetBankAccountResponse');
const ListOrderResponse = require('../lib/Models/ListOrderResponse');
const ListTransactionsResponse = require('../lib/Models/ListTransactionsResponse');
const PagingResponse = require('../lib/Models/PagingResponse');
const UpdatePlanRequest = require('../lib/Models/UpdatePlanRequest');
const GetCardTokenResponse = require('../lib/Models/GetCardTokenResponse');
const GetGatewayRecipientResponse = require('../lib/Models/GetGatewayRecipientResponse');
const UpdateSubscriptionStartAtRequest = require('../lib/Models/UpdateSubscriptionStartAtRequest');
const UpdateCurrentCycleEndDateRequest = require('../lib/Models/UpdateCurrentCycleEndDateRequest');
const CreateClearSaleRequest = require('../lib/Models/CreateClearSaleRequest');
const GetOrderItemResponse = require('../lib/Models/GetOrderItemResponse');
const ListInvoicesResponse = require('../lib/Models/ListInvoicesResponse');
const CreatePriceBracketRequest = require('../lib/Models/CreatePriceBracketRequest');
const CreateCheckoutBoletoPaymentRequest =
  require('../lib/Models/CreateCheckoutBoletoPaymentRequest');
const CreateBankAccountRequest = require('../lib/Models/CreateBankAccountRequest');
const ListAnticipationResponse = require('../lib/Models/ListAnticipationResponse');
const CreateLocationRequest = require('../lib/Models/CreateLocationRequest');
const UpdateTransferSettingsRequest = require('../lib/Models/UpdateTransferSettingsRequest');
const CreatePaymentRequest = require('../lib/Models/CreatePaymentRequest');
const GetAddressResponse = require('../lib/Models/GetAddressResponse');
const GetChargeResponse = require('../lib/Models/GetChargeResponse');
const CreateDeviceRequest = require('../lib/Models/CreateDeviceRequest');
const GetLocationResponse = require('../lib/Models/GetLocationResponse');
const GetUsagesDetailsResponse = require('../lib/Models/GetUsagesDetailsResponse');
const CreatePaymentAuthenticationRequest =
  require('../lib/Models/CreatePaymentAuthenticationRequest');
const CreateApplePayRequest = require('../lib/Models/CreateApplePayRequest');
const UpdateSubscriptionMinimumPriceRequest =
  require('../lib/Models/UpdateSubscriptionMinimumPriceRequest');
const CreateCancelChargeRequest = require('../lib/Models/CreateCancelChargeRequest');
const GetThreeDSecureResponse = require('../lib/Models/GetThreeDSecureResponse');
const GetCheckoutDebitCardPaymentResponse =
  require('../lib/Models/GetCheckoutDebitCardPaymentResponse');
const CreateSplitOptionsRequest = require('../lib/Models/CreateSplitOptionsRequest');
const CreateGooglePayHeaderRequest = require('../lib/Models/CreateGooglePayHeaderRequest');
const GetInvoiceResponse = require('../lib/Models/GetInvoiceResponse');
const ListUsagesResponse = require('../lib/Models/ListUsagesResponse');
const ListCardsResponse = require('../lib/Models/ListCardsResponse');
const GetPriceBracketResponse = require('../lib/Models/GetPriceBracketResponse');
const UpdateChargeCardRequest = require('../lib/Models/UpdateChargeCardRequest');
const UpdateRecipientRequest = require('../lib/Models/UpdateRecipientRequest');
const GetAnticipationLimitResponse = require('../lib/Models/GetAnticipationLimitResponse');
const CreateCancelChargeSplitRulesRequest =
  require('../lib/Models/CreateCancelChargeSplitRulesRequest');
const GetAnticipationResponse = require('../lib/Models/GetAnticipationResponse');
const CreateCheckoutCardInstallmentOptionRequest =
  require('../lib/Models/CreateCheckoutCardInstallmentOptionRequest');
const CreateCheckoutDebitCardPaymentRequest =
  require('../lib/Models/CreateCheckoutDebitCardPaymentRequest');
const CreateAnticipationRequest = require('../lib/Models/CreateAnticipationRequest');
const UpdateOrderStatusRequest = require('../lib/Models/UpdateOrderStatusRequest');
const UpdateSubscriptionDueDaysRequest = require('../lib/Models/UpdateSubscriptionDueDaysRequest');
const ListChargeTransactionsResponse = require('../lib/Models/ListChargeTransactionsResponse');
const ListCyclesResponse = require('../lib/Models/ListCyclesResponse');
const CreateEmvDataDecryptRequest = require('../lib/Models/CreateEmvDataDecryptRequest');
const CreateEmvDataTlvDecryptRequest = require('../lib/Models/CreateEmvDataTlvDecryptRequest');
const CreateCardPaymentContactlessPOIRequest =
  require('../lib/Models/CreateCardPaymentContactlessPOIRequest');
const CreateEmvDataDukptDecryptRequest = require('../lib/Models/CreateEmvDataDukptDecryptRequest');
const CreateEmvDecryptRequest = require('../lib/Models/CreateEmvDecryptRequest');
const GetUsageReportResponse = require('../lib/Models/GetUsageReportResponse');
const GetChargesSummaryResponse = require('../lib/Models/GetChargesSummaryResponse');
const CreateWithdrawRequest = require('../lib/Models/CreateWithdrawRequest');
const GetWithdrawTargetResponse = require('../lib/Models/GetWithdrawTargetResponse');
const GetWithdrawSourceResponse = require('../lib/Models/GetWithdrawSourceResponse');
const GetWithdrawResponse = require('../lib/Models/GetWithdrawResponse');
const GetTransferSourceResponse = require('../lib/Models/GetTransferSourceResponse');
const GetTransferTargetResponse = require('../lib/Models/GetTransferTargetResponse');
const GetTransfer = require('../lib/Models/GetTransfer');
const CreateTransfer = require('../lib/Models/CreateTransfer');
const ListTransfers = require('../lib/Models/ListTransfers');
const ListWithdrawals = require('../lib/Models/ListWithdrawals');
const CreatePrivateLabelPaymentRequest = require('../lib/Models/CreatePrivateLabelPaymentRequest');
const GetPrivateLabelTransactionResponse =
  require('../lib/Models/GetPrivateLabelTransactionResponse');
const CreateAutomaticAnticipationSettingsRequest =
  require('../lib/Models/CreateAutomaticAnticipationSettingsRequest');
const UpdateAutomaticAnticipationSettingsRequest =
  require('../lib/Models/UpdateAutomaticAnticipationSettingsRequest');
const GetAutomaticAnticipationResponse = require('../lib/Models/GetAutomaticAnticipationResponse');
const GetSplitOptionsResponse = require('../lib/Models/GetSplitOptionsResponse');
const CreateSubMerchantRequest = require('../lib/Models/CreateSubMerchantRequest');
const GetPixTransactionResponse = require('../lib/Models/GetPixTransactionResponse');
const PixAdditionalInformation = require('../lib/Models/PixAdditionalInformation');
const CreatePixPaymentRequest = require('../lib/Models/CreatePixPaymentRequest');
const GetTransferSettingsResponse = require('../lib/Models/GetTransferSettingsResponse');
const CreateSubscriptionSplitRequest = require('../lib/Models/CreateSubscriptionSplitRequest');
const GetSubscriptionSplitResponse = require('../lib/Models/GetSubscriptionSplitResponse');
const UpdateSubscriptionSplitRequest = require('../lib/Models/UpdateSubscriptionSplitRequest');
const CancelSplitRequest = require('../lib/Models/CancelSplitRequest');
const GetPixPayerResponse = require('../lib/Models/GetPixPayerResponse');
const GetPixBankAccountResponse = require('../lib/Models/GetPixBankAccountResponse');
const GetInterestResponse = require('../lib/Models/GetInterestResponse');
const GetFineResponse = require('../lib/Models/GetFineResponse');
const CreateInterestRequest = require('../lib/Models/CreateInterestRequest');
const CreateFineRequest = require('../lib/Models/CreateFineRequest');
const ErrorException = require('../lib/Exceptions/ErrorException');

const classMap = {
    ListSubscriptionsResponse,
    UpdatePriceBracketRequest,
    GetPlanResponse,
    CreatePhonesRequest,
    UpdateMetadataRequest,
    GetCheckoutPaymentSettingsResponse,
    UpdateCustomerRequest,
    CreateBoletoPaymentRequest,
    CreateDiscountRequest,
    CreateIncrementRequest,
    ListIncrementsResponse,
    GetGatewayResponseResponse,
    GetPaymentAuthenticationResponse,
    UpdateSubscriptionPaymentMethodRequest,
    GetCheckoutBoletoPaymentResponse,
    UpdateSubscriptionItemRequest,
    CreateSetupRequest,
    CreatePricingSchemeRequest,
    UpdatePricingSchemeRequest,
    GetPlanItemResponse,
    GetBankTransferTransactionResponse,
    GetTransferResponse,
    CreateSubscriptionItemRequest,
    CreateSubscriptionRequest,
    CreateOrderRequest,
    CreateRecipientRequest,
    CreateDebitCardPaymentRequest,
    GetDebitCardTransactionResponse,
    CreateOrderItemRequest,
    GetTransactionReportFileResponse,
    CreateCardOptionsRequest,
    GetPhoneResponse,
    CreateCardTokenRequest,
    GetTokenResponse,
    GetRecipientResponse,
    GetIncrementResponse,
    GetPeriodResponse,
    UpdateChargePaymentMethodRequest,
    GetTransactionResponse,
    GetCheckoutPaymentResponse,
    CreateCardRequest,
    GetAccessTokenResponse,
    ListChargesResponse,
    GetOrderResponse,
    CreatePlanItemRequest,
    GetBillingAddressResponse,
    CreateApplePayHeaderRequest,
    CreateChargeRequest,
    CreateCustomerRequest,
    CreateCancelSubscriptionRequest,
    ListAccessTokensResponse,
    CreateTransferRequest,
    ListRecipientResponse,
    GetBalanceResponse,
    GetUsageResponse,
    CreateCreditCardPaymentRequest,
    ListDiscountsResponse,
    CreateUsageRequest,
    GetSubscriptionResponse,
    GetSubscriptionItemResponse,
    GetCardResponse,
    GetSplitResponse,
    CreateCheckoutPaymentRequest,
    CreateCheckoutBankTransferRequest,
    ListPlansResponse,
    CreateAccessTokenRequest,
    GetDiscountResponse,
    GetVoucherTransactionResponse,
    CreateTokenRequest,
    UpdateInvoiceStatusRequest,
    UpdateAddressRequest,
    GetBoletoTransactionResponse,
    GetInvoiceItemResponse,
    GetCheckoutCreditCardPaymentResponse,
    UpdateCardRequest,
    GetSetupResponse,
    CreatePlanRequest,
    CreateVoucherPaymentRequest,
    CreateBankTransferPaymentRequest,
    CreateShippingRequest,
    GetShippingResponse,
    CreateSplitRequest,
    CreateInvoiceRequest,
    UpdateSubscriptionBillingDateRequest,
    ListAddressesResponse,
    GetGatewayErrorResponse,
    CreatePeriodRequest,
    CreateCheckoutCreditCardPaymentRequest,
    CreateAntifraudRequest,
    GetAntifraudResponse,
    UpdatePlanItemRequest,
    CreateAddressRequest,
    GetAnticipationLimitsResponse,
    UpdateSubscriptionAffiliationIdRequest,
    CreateCashPaymentRequest,
    CreateConfirmPaymentRequest,
    GetCashTransactionResponse,
    UpdateCurrentCycleStatusRequest,
    GetCheckoutBankTransferPaymentResponse,
    GetCheckoutCardInstallmentOptionsResponse,
    ListSubscriptionItemsResponse,
    UpdateSubscriptionCardRequest,
    GetCustomerResponse,
    CreatePhoneRequest,
    GetPhonesResponse,
    CreateCaptureChargeRequest,
    GetSafetyPayTransactionResponse,
    ListTransferResponse,
    GetDeviceResponse,
    UpdateOrderItemRequest,
    ListUsagesDetailsResponse,
    CreateTransferSettingsRequest,
    CreateTransactionReportFileRequest,
    ListTransactionsFilesResponse,
    CreateGooglePayRequest,
    UpdateChargeDueDateRequest,
    ListCustomersResponse,
    GetPricingSchemeResponse,
    UpdateRecipientBankAccountRequest,
    CreateThreeDSecureRequest,
    GetCreditCardTransactionResponse,
    CreateCardPaymentContactlessRequest,
    GetBankAccountResponse,
    ListOrderResponse,
    ListTransactionsResponse,
    PagingResponse,
    UpdatePlanRequest,
    GetCardTokenResponse,
    GetGatewayRecipientResponse,
    UpdateSubscriptionStartAtRequest,
    UpdateCurrentCycleEndDateRequest,
    CreateClearSaleRequest,
    GetOrderItemResponse,
    ListInvoicesResponse,
    CreatePriceBracketRequest,
    CreateCheckoutBoletoPaymentRequest,
    CreateBankAccountRequest,
    ListAnticipationResponse,
    CreateLocationRequest,
    UpdateTransferSettingsRequest,
    CreatePaymentRequest,
    GetAddressResponse,
    GetChargeResponse,
    CreateDeviceRequest,
    GetLocationResponse,
    GetUsagesDetailsResponse,
    CreatePaymentAuthenticationRequest,
    CreateApplePayRequest,
    UpdateSubscriptionMinimumPriceRequest,
    CreateCancelChargeRequest,
    GetThreeDSecureResponse,
    GetCheckoutDebitCardPaymentResponse,
    CreateSplitOptionsRequest,
    CreateGooglePayHeaderRequest,
    GetInvoiceResponse,
    ListUsagesResponse,
    ListCardsResponse,
    GetPriceBracketResponse,
    UpdateChargeCardRequest,
    UpdateRecipientRequest,
    GetAnticipationLimitResponse,
    CreateCancelChargeSplitRulesRequest,
    GetAnticipationResponse,
    CreateCheckoutCardInstallmentOptionRequest,
    CreateCheckoutDebitCardPaymentRequest,
    CreateAnticipationRequest,
    UpdateOrderStatusRequest,
    UpdateSubscriptionDueDaysRequest,
    ListChargeTransactionsResponse,
    ListCyclesResponse,
    CreateEmvDataDecryptRequest,
    CreateEmvDataTlvDecryptRequest,
    CreateCardPaymentContactlessPOIRequest,
    CreateEmvDataDukptDecryptRequest,
    CreateEmvDecryptRequest,
    GetUsageReportResponse,
    GetChargesSummaryResponse,
    CreateWithdrawRequest,
    GetWithdrawTargetResponse,
    GetWithdrawSourceResponse,
    GetWithdrawResponse,
    GetTransferSourceResponse,
    GetTransferTargetResponse,
    GetTransfer,
    CreateTransfer,
    ListTransfers,
    ListWithdrawals,
    CreatePrivateLabelPaymentRequest,
    GetPrivateLabelTransactionResponse,
    CreateAutomaticAnticipationSettingsRequest,
    UpdateAutomaticAnticipationSettingsRequest,
    GetAutomaticAnticipationResponse,
    GetSplitOptionsResponse,
    CreateSubMerchantRequest,
    GetPixTransactionResponse,
    PixAdditionalInformation,
    CreatePixPaymentRequest,
    GetTransferSettingsResponse,
    CreateSubscriptionSplitRequest,
    GetSubscriptionSplitResponse,
    UpdateSubscriptionSplitRequest,
    CancelSplitRequest,
    GetPixPayerResponse,
    GetPixBankAccountResponse,
    GetInterestResponse,
    GetFineResponse,
    CreateInterestRequest,
    CreateFineRequest,
    ErrorException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;

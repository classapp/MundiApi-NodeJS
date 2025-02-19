/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateDebitCardPaymentRequest
 */
class CreateDebitCardPaymentRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.statementDescriptor =
          this.constructor.getValue(obj.statementDescriptor
     || obj.statement_descriptor);
        this.card = this.constructor.getValue(obj.card);
        this.cardId = this.constructor.getValue(obj.cardId || obj.card_id);
        this.cardToken = this.constructor.getValue(obj.cardToken || obj.card_token);
        this.recurrence = this.constructor.getValue(obj.recurrence);
        this.authentication = this.constructor.getValue(obj.authentication);
        this.token = this.constructor.getValue(obj.token);
        this.recurrencyCycle =
          this.constructor.getValue(obj.recurrencyCycle
     || obj.recurrency_cycle);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'statementDescriptor', realName: 'statement_descriptor' },
            { name: 'card', realName: 'card', type: 'CreateCardRequest' },
            { name: 'cardId', realName: 'card_id' },
            { name: 'cardToken', realName: 'card_token' },
            { name: 'recurrence', realName: 'recurrence' },
            {
                name: 'authentication',
                realName: 'authentication',
                type: 'CreatePaymentAuthenticationRequest',
            },
            { name: 'token', realName: 'token', type: 'CreateCardPaymentContactlessRequest' },
            { name: 'recurrencyCycle', realName: 'recurrency_cycle' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = CreateDebitCardPaymentRequest;

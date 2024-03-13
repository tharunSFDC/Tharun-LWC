import { LightningElement, api } from 'lwc';

import Name_Field from '@salesforce/schema/Product2.Name';
import ProductCode_Field from '@salesforce/schema/Product2.ProductCode';
import Family_Field from '@salesforce/schema/Product2.Family';
import IsActive_Field from '@salesforce/schema/Product2.IsActive';
import Description_Field from '@salesforce/schema/Product2.Description';

export default class Lwc_recordfrom_lds extends LightningElement {

    @api recordId;
    @api objectApiName;
    customfields=[Name_Field,ProductCode_Field,Family_Field,IsActive_Field,Description_Field];

}
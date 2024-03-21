import { LightningElement, wire } from 'lwc';
import findcontact from '@salesforce/apex/contacts_lwc_new.newcontacts';

export default class Lwc_proprety_function extends LightningElement {
    skeys;
    condata;
    conerror;

    handlekey(event)
    {
        this.skeys=event.target.value;
    }
      //Wire a Property
    @wire(findcontact,{searchtext:'$skeys'}) serachcontacs;

    // Wire a Function

    @wire(findcontact,{searchtext:'$skeys'}) contactfunction({error,data}){

        if(data)
        {
            this.condata=data;
        }
        else{
            this.conerror=error;
            this.condata=undefined;
        }

    }
}
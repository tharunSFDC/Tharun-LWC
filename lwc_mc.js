import { LightningElement } from 'lwc';
import {publish,subscribe,unsubscribe,createMessageContext,releaseMessageContext} from 'lightning/messageService';
import samplelc from "@salesforce/messageChannel/lmessage__c";

export default class Lwc_mc extends LightningElement {
    mymessage='';
    recmessage='';
    context=createMessageContext();
    sunbs=null;

    constructor()
    {
        super();
    }

    handletext(event)
    {
        this.mymessage=event.target.value;

    }
    publishmc(event)
    {
        const message={
            messageToSend:this.mymessage,
            mobileNumber:'This is from LWC page',
            sourceSystem:'7856789876'
        };
        publish(this.context,samplelc,message);

    }
    submc(event)
    {
        if(this.sunbs)
        {
            return;
        }
        this.sunbs=subscribe(this.context,samplelc,(message)=>{
            this.displayMessage(message);
        });

    }
    displayMessage(message)
    {
        alert('lwc message'+message);
        this.recmessage=message? JSON.stringify(message,null,'\t'):'no message playload form vf page';

    }
    unsubmc(event)
    {
        unsubscribe(this.sunbs);
        this.sunbs=null;

    }
    disconnectedCallback()
    {
        releaseMessageContext(this.context);
    }
}
import { LightningElement, wire } from 'lwc';
import pubsub from 'c/hooks_pubsub';
import {currentpage} from 'lightning/navigation';

export default class Sub_hooks extends LightningElement {
    //get current page refernces

    @wire(currentpage) pageref;
    message='';

    connectedCallback()
    {
        pubsub.registerListerner('send message',this.handleincomingmessage,this)
    }
    handleincomingmessage(message)
    {
        this.message=message;
    }
}
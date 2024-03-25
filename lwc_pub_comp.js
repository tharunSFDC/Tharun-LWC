import { LightningElement, wire } from 'lwc';
import {currentpage} from 'lightning/navigation';
import pubsub from 'c/hooks_pubsub';

export default class Lwc_pub_comp extends LightningElement {

    @wire(currentpage) pageref;

    message='';

    handlechange(event)
    {
        this.message=event.target.value;

    }
    handlesubmit()
    {

        //fire event (or) publish event
        pubsub.fireEvent(this.currentpage,'send message',this.message);

    }
}
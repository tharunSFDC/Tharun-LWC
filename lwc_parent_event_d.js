import { LightningElement } from 'lwc';

export default class Lwc_parent_event_d extends LightningElement {

    vol=0;

    handleincrease(event)
    {
        if(this.vol<100)
        {
            this.vol=this.vol+1;
        }

    }
    handledown(event)
    {
        if(this.vol>0)
        {
            this.vol=this.vol-1;
        }

    }
}
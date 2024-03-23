import { LightningElement } from 'lwc';

export default class Lwc_parent_empoye extends LightningElement {

    empname;
    empPhone;
    empEmail;

    handleevent(event)
    {
        this.empname=event.detail.enm;
        this.empPhone=event.detail.eph;
        this.empEmail=event.detail.eme;
    }
}
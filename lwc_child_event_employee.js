import { LightningElement } from 'lwc';

export default class Lwc_child_event_employee extends LightningElement {
    name;
    phone;
    email;

    handlechange(event){
        this.name=event.target.value;
    }
    handlephone(event){
        this.phone=event.target.value;
    }
    handleemail(event){
        this.email=event.target.value;
    }
    handleSubmit(event){

        this.dispatchEvent(new CustomEvent('employe',{detail:{enm:this.name,eph:this.phone,eme:this.email}}))

    }


}
import React, {Component} from "react";
import Car from "../Car/Car";


class Cars extends Component{

    state ={
        cars:[
            { name:'Ford', year:'2018'},
            { name:'Audi', year:'2016'},
            { name:'Mazda', year:'2010'}
        ],
        pageTitle:'Cars page'
    }

    changeTitleHandle = (newTitle) =>{

        this.setState({
            pageTitle: newTitle
        })
    }

    handleInput = (event) =>{

        this.setState({
            pageTitle:event.target.value
        })
    }


    render() {

        const divStyle={
            textAlign:'center'
        }



        return(
            <div style={divStyle}>


                <hr/>
                <h1>{this.state.pageTitle}</h1>
                <input type="text" onChange={this.handleInput}/>
                <button onClick={this.changeTitleHandle.bind(this, 'Changed!')}>Change title </button>

                {
                    this.state.cars.map((car, index) =>{
                        return(
                            <Car
                                name={car.name}
                                year = {car.year}
                                onChangeTitle={()=>this.changeTitleHandle(car.name)}
                                key={index}
                                {...this.props}
                            />
                        )
                    })
                }

            </div>
        )

    }
}



export default Cars;



dPOProt._renderSettsContent = function () {
    this._pageNames = ['BuyLimit', 'SellLimit', 'BuyStop', 'SellStop'];
    var i, n, t, p = [];
    this._symbolSelect = this._createSymbolSelect({LabelPosition: 'Left', Width: 120, ModifyMode: this._ModifyMode});
    this._descriptionNode = WT.htmlToDOM('<div class="ExtendedSymbolName"></div>');
    this._volumeCombo = this._createVolumeCombo({
        LabelPosition: 'Left', Class: 'DPOVolume', Width: 120,
        ChangedValue: WT.Delegate(this, function (keydown) {
            var oldValue = this._volumeCombo._Value;
            var newValue = this._volumeCombo.getValue();
            var limit = 999.99;
            if (newValue > limit) {
                keydown.repeat;
                //Range.setStartBefore(node);
                this._volumeCombo.setValue(oldValue);
                //Selection.extend ();
            }
        })
    });
}
import axios from 'axios';
import React, { Component } from 'react'
import AppUrl from '../../api/AppUrl';

export class MegaMenu extends Component {

    constructor(props) {
        super();
        this.MegaMenu = this.MegaMenu.bind(this);
        this.state = {
            categorys: [],
        }
    }

    componentDidMount() {
        this.MegaMenu();
        this.GetCategory();
    }

    GetCategory() {
        axios.get(AppUrl.allCategory)
            .then((response) => {
                this.setState({ categorys: response.data });
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }

    MegaMenu() {
        var acc = document.getElementsByClassName('accordion');
        console.log(acc.length);
    }

    render() {

        const CatList = this.props.data;

        const MyView = CatList.map((CatList,i)=>{

            return <div key={i.toString()}>
                <button className='accordion'>
                    <img src={CatList.category_image} alt={CatList.category_name} className='accordionMenuIcon' /> {CatList.category_name}
                </button>
            </div>

        });

        return (
            <div className='accordionMenuDiv'>
                <div className="accordionMenuDivInside">
                    
                    {MyView}

                </div>

            </div>
        )
    }
}

export default MegaMenu
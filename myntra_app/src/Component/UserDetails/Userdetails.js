import React, {Component} from 'react';
import {UserList, User, IconText} from './UserdetailsSC';

export default class Userdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserObject: [
                {
                    OffsetX: '-603px',
                    OffsetY: '-117px',
                    width: '33px',
                    height: '32px',
                    text: 'Profile',
                    id: 1
                },
                {
                    OffsetX: '-650px',
                    OffsetY: '-117px',
                    width: '24px',
                    height: '32px',
                    text: 'Wishlist',
                    id: 2
                },
                {
                    OffsetX: '-688px',
                    OffsetY: '-117px',
                    width: '32px',
                    height: '32px',
                    text: 'Bag',
                    id: 3
                },
            ]
        }
    }

    render() {
        return (
            <User>
                {
                    this.state.UserObject.map((element, index) => {
                        return <li key={element.id}>
                            <UserList userobj={this.state.UserObject[index]}>
                            </UserList>
                            <IconText>{element.text}</IconText>
                        </li>
                    })
                }
            </User>)
    }
}

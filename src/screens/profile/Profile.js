import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, Fragment} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HistoryBox from '../../components/HistoryBox';
import commonStyles from '../../shared/commonStyle';
import styles from './style';

export default class Profile extends Component {

    state ={
        name: 'Maria Joaquina',
        email: 'mariajoaquina@hotmail.com',
        photoUser: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        rating: 28,

        history: [
            {   
                place: 'Fatec Carapicuiba',
                photo: 'https://lh3.googleusercontent.com/proxy/6pWWBJC7eg969CH9edOoITbiaK9ubjXVuGNsQBElCJotnE9KJUwQPAL85n2M9VabPazg-V5jSPIw2bQGC2KJOXOA1BJ17Y83f2ijy_LPoa6CC0KQFJnBTJEv5Ei7lXLNAsjyH-KMAMHemf6zDw8MMv4mRNCDNWAs-Us5A4zAKilAJ1R2',
                rating: 4.0,
                date: '20/11/2019'
            },
            {   
                place: 'Fatec Barueri',
                photo: 'https://lh3.googleusercontent.com/proxy/Mzh_e5FRKHNTzC2Fy7vZrW6jvfkQEjJ8RUVTr16ybyATuL-98pdt7hZ7_YhTZCkN0LJgP_2n5vWzJxBQf8OXrkg_bjaWfUhsN6gY6IF0BfdbLeUsh_mYjJ8vgncgrf_70a0spXYb5Oa9WsSK3GypBJVzIXIcJ2VoPrD9cM9u',
                rating: 4.0,
                date: '20/12/2019'
            },
            {   
                place: 'Fatec Osasco',
                photo: 'https://www.visaooeste.com.br/wp-content/uploads/2017/08/fatec-osasco-Small.jpg?width=1200&enable=upscale',
                rating: 3.0,
                date: '29/03/2020'
            },
            {   
                place: 'Fatec São Paulo',
                photo: 'https://lh3.googleusercontent.com/proxy/who5ndj9OcQAnjNNZgyuy5LNh-6D79COPRe9PkMPkDFH_q6QknU5UxTTB7uNva13B31IYcLrloTrN0AMEftmtfsGPZvAwvLIx5Ji0As0HZ7mIDO-30iu1VOUlfZfRSRlHJkK5ywJx_ywauJPvCCZCsoy',
                rating: 3.0,
                date: '29/03/2020'
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contantUser}>
                    <View style={styles.photoContainer}>
                        <Image style={styles.photoUser} source={{uri: this.state.photoUser}}/>
                        <TouchableOpacity style={styles.edit}>
                            <Icon name="create" size={20} color='#fff'/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>{this.state.name}</Text>
                    <Text style={styles.email}>{this.state.email}</Text>

                    <View style={styles.rating}>
                        <Icon name="place" size={20} color={commonStyles.colors.primaryColor}/>
                        <Text style={styles.textRating}>{this.state.rating}</Text>
                    </View>
                </View>

                <View style={styles.containerTab}>
                    <TouchableOpacity style={[styles.tab]}>
                        <Text style={styles.textTab}>Perfil</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.tab, styles.tabSelected]}>
                        <Text style={styles.textTab}>Histórico</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={this.state.history}
                    keyExtractor={item => item.place}
                    renderItem={({ item, i }) =>
                        <HistoryBox key={i} {...item} />
                    }
                />
            </View>
        )
    }
}
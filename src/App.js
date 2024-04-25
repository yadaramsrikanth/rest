import {Component} from 'react'

import './App.css'

// write your code here

class App extends Component {
  state = {
    restauarantDataList: {},
    restauarantTableList: [],
    categorydishesList: [],
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    const urlData = await fetch(
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc',
    )

    if (urlData.ok) {
      const dataa = await urlData.json()
      const responseData = dataa[0]
      console.log(responseData)
      const itemListData = responseData.table_menu_list.map(eachItem => ({
        menuCategory: eachItem.menu_category,
        menuCategoryId: eachItem.menu_category_id,
        menuCategoryImage: eachItem.menu_category_image,
        menuNxtUrl: eachItem.nexturl,
      }))

      const dishesData = dataa.table_menu_list.category_dishes.map(each => ({
        dishAvailability: each.dish_Availability,
        dishType: each.dish_Type,
        dishCalories: each.dish_calories,
        dishCurrency: each.dish_currency,
        dishDescription: each.dish_description,
        dishId: each.dish_id,
        dishImage: each.dish_image,
        dishName: each.dish_name,
        dishPrice: each.dish_price,
      }))

      console.log(dishesData)
      this.setState({
        restauarantTableList: itemListData,
        categorydishesList: dishesData,
      })
    }
  }

  renderRestauarantDetails = () => {
    const {categorydishesList} = this.state

    {
      categorydishesList.map(eachI => console.log(eachI.dishDescription))
    }
    return <h1>hello</h1>
  }

  render() {
    return (
      <div className='restaurant-main-container'>
        {this.renderRestauarantDetails()}
      </div>
    )
  }
}

export default App

/* const data = {
        branchName: updatedData.branch_name,
        nextUrl: updatedData.nexturl,
        restaurantId: updatedData.restaurant_id,
        restaurantImage: updatedData.restaurant_image,
        restaurantName: updatedData.restaurant_name,
        tableId: updatedData.table_id,
        tableName: updatedData.table_name,
      }

      this.setState({restauarantDataList: data})*/

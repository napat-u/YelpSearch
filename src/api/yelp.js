import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer CM7C21OUWEjEPNR5vgpfUsAgzo8Tl9s4_YZfElVCuWQwhpY2WKC3Kt9rNxlHpMWVEYluE5-Npi3mph9wWQjSwVwUqClHYfMJOp8PX8h91OxcMTXHEmC9Pept7J2gXXYx'
    }
}) // key is Secret. Must no show to the other if Project is not important !!!!!!!!!!!!!!!!!!

import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {request} from '../../util/fetchAPI'
import classes from './featuredProperties.module.css'
import {FaBed, FaSquareFull} from 'react-icons/fa'
import img from '../../assets/trial_property.jpg'

const FeaturedProperties = () => {
    const [featuredProperties, setFeaturedProperties] = useState([])

    useEffect(() => {
        const fetchFeatured= async() => {
            try{
                const data = await request('/property/find/featured', 'GET')
                setFeaturedProperties(data)}
                catch(error){
                    console.error(error.message)
                }
            }
            fetchFeatured()
        }, [])
    return (
        <div className={classes.container}>
            <div className={classes.wrappper}>
                <div className={classes.titles}>
                    <h1>Properties you may like</h1>

                </div>
                <div className={classes.FeaturedProperties}>
                    {featuredProperties?.map((property) => (
                        <div key ={property._id} className={classes.featuredProperty} style={{width:'500px',margin:'0px'}}>
                            <Link to={'/propertyDetail/${property._id}'} className={classes.imgContainer}>
                                <img src = {img} alt="" style={{width:'500px', display:'flex'}}/>
                            </Link>
                            <div className={classes.details}>
                                <div className={classes.priceAndOwner}>
                                    <span classname={classes.price}>$ {property?.price}</span>
                                </div>
                                <div className={classes.moreDetails}>
                                    <span>{property?.beds}beds <FaBed className={classes.icon}/></span>
                                    <span>{property?.sqmeters} square meters <FaSquareFull className={classes.icon}/></span>
                                </div>
                                <div className ={classes.desc}>
                                    {property?.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties
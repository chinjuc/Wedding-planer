import React from 'react'
import { asset } from '../../assets/asset'
import { motion } from 'framer-motion'
import './Colle.css'
import About from '../Home/About'
import { Link } from 'react-router-dom'
const lists = [
  { name: 'Decorators', img: asset.Decoration, costumers: '3486+',link:'decor' },
  { name: 'Photographers', img: asset.Photographer, costumers: '3293+', link:'photos' },
  { name: 'Pre wedding', img: asset.prewedding, costumers: '3121+',link:'prewed' },
  { name: 'Makeup Artist', img: asset.makeup, costumers: '1238+', link:'mk' },
  { name: 'Invitations', img: asset.invitation, costumers: '283+', link:'invitations' },
  { name: 'Dj', img: asset.dj, costumers: '2344+',link:'dj' },
  { name: 'Venues', img: asset.Decoration1, costumers: '3244+',link:'venue' },
  { name: 'Party', img: asset.dj2, costumers: '2345+', link:'party' },
]

const Collection = () => {
  return (
    <div className="containers" id='events'>
      <div>
        <h1 className="evnts">Event planners</h1>
      </div>

      <div className="collection">
        {lists.map((list, index) => (
          <motion.div
            key={index}
            className="col-plan"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}   
            transition={{ duration: 0.9, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.2 }} 
          >
          <Link to={`/collection/${list.link}`} style={{ textDecoration: 'none' }}> <img src={list.img} alt={list.name} />
            <h1>{list.name}</h1>
            <span>{list.costumers}</span></Link>
          </motion.div>
        ))}
      </div>
      <About />
    </div>
    
  )
}

export default Collection

import React from 'react'
import homeStyles from '../styles/Home.module.css';

import { PostCardProps } from '../types/PostCardProps';


export default function PostCard(props: PostCardProps) {
  return (
    <div className={ homeStyles.blog } > 
              <div className={ homeStyles.title }>{props.title} </div>
              <div className={ homeStyles.content }>{props.content} </div>
    </div>
  )
}

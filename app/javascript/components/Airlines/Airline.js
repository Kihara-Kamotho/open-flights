import React from 'react' 
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  `

const AirlineLogo = styled.div`
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  
  img{
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
  `

const AirlineName = styled.div`
  padding: 20px 0 10px 0;
  `

const LinkWrapper = styled.div`
margin: 30px 0 20px 0;
height: 50px;

a {
  color: #fff;
  background: #000;
  border-radius: 4px;
  padding: 10px 50px;
  border: 1px solid #000;
  width: 100%;
  text-decoration: none;
}
`

const Airline = (props) => {
  const {name, image_url, slug, avg_score} = props.attributes
  return(
    <>
      <Card>
        <AirlineLogo>
          <img src={image_url} alt={name} />
        </AirlineLogo>
        <AirlineName>{name}</AirlineName>
        <div className="airline-score">{avg_score}</div>
        <LinkWrapper>
          <a href={`/airlines/${slug}`}>view airline</a>
        </LinkWrapper>
      </Card>
    </>
  )
}

export default Airline 
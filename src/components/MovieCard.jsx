
import { useNavigate } from 'react-router-dom';


const MovieCard = ({title,overview, poster_path,vote_average,id}) => {

const navigate = useNavigate();

  return (
    <div
    className="card w-[400px] rounded-xl overflow-hidden transition-all ease-in hover:scale-105"
    onClick={()=>navigate("/details/" + id)}
    
  >
    
    <img
      className="w-full"
      src={poster_path ? `https://image.tmdb.org/t/p/w1280${poster_path}` : "https://images.unsplash.com/photo-1527212986666-4d2d47a80d5f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      alt=""
    />
    
  </div>
  )
}

export default MovieCard










import { Arrow } from '@components/Arrow'
import { getPadding } from '@utils/functions'
import Link from 'next/link'
import styled from 'styled-components'

const Background = styled.div<{ backgroundColor: string, backgroundImage?: string }>`
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.1s ease-out;

  &:hover {
    transform: scale(0.99);
  }
`

const HeadlineBackground = styled.div<{Width: string, Top: string }>`
width: ${ ({ Width }) => Width};
min-width: 55%;
height: 2.5rem;
position: absolute;
top: ${({ Top }) => Top};
background-color: var(--whiteColor);
margin-bottom: 1rem;
z-index: 1;
text-align: center;

`

const Title = styled.div<{ textColor: string }>`
  height: 6rem;
  width: 50%;
  max-width: 60%;
  position: absolute;
  top: 181px;
  left: 1.1rem;
  overflow-y: hidden;
  background-color: transparent;
  font-family: var(--font-family-primary) ;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 900;
  color: ${props => props.textColor};
  line-height: 3rem;
  z-index: 10;


`

const ArrowContainer = styled.div`
width: 40px;
height: 40px;
margin-left: 90%;
margin-top: 240px;
`

const StyledArrow = styled(Arrow)<{ btnColor: string }>`
  width: 40px;
  height: 40px;

  fill: ${props => props.btnColor};

`

export const Test = (props: any) => {
  const padding = getPadding(props.properties?.padding)

  return (

    <div >
      <Link href={ props.linkUrl }

        tabIndex={ -1 }
      >

        <Background
          id={ props.properties?.anchor }
          className={ `${props.properties?.className} Test ${padding} uk-padding-remove-horizontal` }
          backgroundColor={ props.properties?.backgroundColor }
          backgroundImage={ props.imageUrl }
        >
          <HeadlineBackground Width='70%'
            Top='185px'
          />

          <HeadlineBackground Width='45%'
            Top='235px'
          />

          <Title textColor={ props.color } >

            {props.title}

          </Title >

          <ArrowContainer >
            <StyledArrow btnColor={ props.color } />
          </ArrowContainer >

        </Background >
      </Link >
    </div >

  )
}

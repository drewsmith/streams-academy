import styled from 'styled-components'

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  margin: 20px;
  background: #37474F;
  border-radius: 10px;
  padding: 20px;
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .2);
`

export const Title = styled.h2`
  font-weight: 100;
  font-size: 48px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, .75);
  font-family: 'Amatic SC', sans-serif;
  text-align: center;
  color: #FFFFFF;
  margin: 0;
`

export const Paragraph = styled.p`
  font-size: 1em;
  margin: 20px;
  line-height: 1.15em;
`

export const Highlight = styled.span`
  background: #263238;
  color: #f9f9f9;
  border-radius: 4px;
  padding: 0 5px;
`

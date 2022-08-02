import styled from "styled-components"

const Filter = styled.div`
    /* display: flex; */
`
const FiltersSection = () => {
  return (
    <Filter>
      <input type="text" name="search" value="#" />
      <input type="checkbox" id="topping" name="topping" value="lowest" />
      <input type="checkbox" id="topping" name="topping" value="highest" />
    </Filter>
  )
}

export default FiltersSection
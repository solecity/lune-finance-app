// base
import React from "react";
import PropTypes from "prop-types";

// external components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { PlusCircle } from "@styled-icons/boxicons-solid/PlusCircle";

// custom components
import { IconButton } from "shared/components";
import { CategoryCard, SubCategoryCard } from "./components";

// styled components
import {
  StyledBoard,
  StyledGrid,
  StyledScroll,
  StyledInnerScroll,
  StyledScrollWrapper,
  StyledColumn
} from "./styles";

const Cards = ({ data, getData, handleForm, setCategory, setIsEdit }) => {
  return (
    <StyledBoard container>
      <StyledGrid>
        <StyledScroll>
          <StyledScrollWrapper>
            {data.map((category, i) => (
              <StyledColumn item key={i}>
                <CategoryCard
                  getData={getData}
                  handleForm={handleForm}
                  category={category}
                  setCategory={setCategory}
                  setIsEdit={setIsEdit}
                />
                <Grid item>
                  <StyledInnerScroll>
                    {category.subCategories.map((subCategory, i) => (
                      <SubCategoryCard key={i} subCategory={subCategory} />
                    ))}
                  </StyledInnerScroll>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "15px" }}>
                  <Card style={{ display: "flex", justifyContent: "center" }}>
                    <IconButton
                      tooltip="Add"
                      icon={<PlusCircle />}
                      action={() => {}}
                    />
                  </Card>
                </Grid>
              </StyledColumn>
            ))}
          </StyledScrollWrapper>
        </StyledScroll>
      </StyledGrid>
    </StyledBoard>
  );
};

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired
};

export default Cards;

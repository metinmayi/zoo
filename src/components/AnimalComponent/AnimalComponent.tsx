import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Animal } from "../../models/Animal";
import { ZooButton } from "../ZooButton";
import { Img } from "./img";
import { Title } from "./title";
import { Wrapper } from "./wrapper";

type Props = {
  animal: Animal;
  large?: boolean;
};
const AnimalComponent: React.FC<Props> = ({ animal, large }) => {
  // Redirect to animal function
  const navigate = useNavigate();
  const redirect: Function = (href?: number) => {
    typeof href === "number" ? navigate(`/${href}`) : navigate(-1);
  };

  const [bgImg, setBgImg] = useState(animal.imageUrl);

  const backupImage: string =
    "https://thumbs.dreamstime.com/b/unavailable-stamp-round-vintage-grunge-label-sign-186956132.jpg";

  return (
    <Wrapper large={large}>
      <Img
        src={bgImg}
        large={large}
        onError={() => setBgImg(backupImage)}></Img>
      <Title>{animal.name}</Title>
      <p>{large ? animal.longDescription : animal.shortDescription}</p>
      {large ? (
        <ZooButton handleClick={() => redirect()}>Return</ZooButton>
      ) : (
        <ZooButton handleClick={() => redirect(animal.id)}>
          Visit Animal
        </ZooButton>
      )}
    </Wrapper>
  );
};

export { AnimalComponent };

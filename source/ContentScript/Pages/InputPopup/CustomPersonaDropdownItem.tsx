import React from "react";
import { Loader } from "@mantine/core";
import { PERSONAS_DROPDOWN_CONSTANTS } from "../../../Config";

interface IProps {
  label: string;
  value: string;
  isLoadingPersonas: boolean;
  loadingMorePersonas: boolean;
  isSearchingPersonas: boolean;
  searchingMorePersonas: boolean;
  props: any;
}

export const CustomPersonaDropdownItem = ({
  label,
  value,
  loadingMorePersonas,
  isLoadingPersonas,
  isSearchingPersonas,
  searchingMorePersonas,
  props,
}: IProps) => {
  const initialLoading =
    value === PERSONAS_DROPDOWN_CONSTANTS.SELECT_PERSONA.value && (isLoadingPersonas || isSearchingPersonas);
  const loadingMore =
    value === PERSONAS_DROPDOWN_CONSTANTS.LOADING_MORE.value && (loadingMorePersonas || searchingMorePersonas);
  const nothingFound =
    value === PERSONAS_DROPDOWN_CONSTANTS.NOTHING_FOUND.value &&
    !isLoadingPersonas &&
    !loadingMorePersonas &&
    !isSearchingPersonas &&
    !searchingMorePersonas;

  return (
    <div
      className={props && props.className}
      style={{
        textAlign: initialLoading || loadingMore || nothingFound ? "center" : "left",
      }}
    >
      {(initialLoading && <Loader size={32} />) || (loadingMore && <Loader size={32} />) || label}
    </div>
  );
};

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { RadioGroupRoot } from "./_internal_radio_group";

const styles = [
  {
    type: "default",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
];

const variantPropTypes = [];

export const SegmentedContext = createContext(null);

function Segmented(_props) {
  const defaults = useContext(SegmentedContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RadioGroupRoot
      {...props}
      key="segmented-control-root"
      addSpacing={true}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "segmented-control-root",
        scope: "Nx26hYCFkE",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => props.children}
    </RadioGroupRoot>
  );
}

Segmented.__variants = [];

export default Segmented;

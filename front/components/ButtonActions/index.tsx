import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import React from "react";

interface FormProps {
  isEdit?: boolean;
}

export interface ButtonActionsProps extends FormProps {
  onClick?: () => void;
  onCancel?: () => void;
}
export const ButtonActions = ({
  onClick,
  onCancel,
  isEdit,
}: ButtonActionsProps) => {
  const theme = useTheme();

  return (
    <Grid container item xs={12}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginBottom: 20, marginTop: 20 }}
        size="large"
      >
        {isEdit ? "Guardar" : "Crear"}
      </Button>

      <Button
        variant="outlined"
        color="primary"
        fullWidth
        size="large"
        onClick={onCancel}
      >
        Cancelar
      </Button>
    </Grid>
  );
};

export default ButtonActions;

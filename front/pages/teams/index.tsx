import React from "react";
import { Layout } from "../../components/Layout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { SearchAppBar } from "../../components/SearchAppBar";
import Fab from "@mui/material/Fab";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import ButtonActions from "../../components/ButtonActions";

const FormSection = () => {
  const data: TextFieldProps[] = [
    {
      label: "name",
      variant: "outlined",
      type: "text",
    },
    {
      label: "position",
      variant: "outlined",
      type: "text",
    },
  ];

  return (
    <>
      {data?.map((item, index) => (
        <TextField
          key={index}
          label={item?.label}
          variant={item?.variant}
          type={item?.type}
          fullWidth
          style={{
            marginTop: 20,
          }}
        />
      ))}
    </>
  );
};

interface FormTeamsProps {
  onCancel: () => void;
  isEdit?: boolean;
}
function FormPlayer({ onCancel, isEdit }: FormTeamsProps) {
  const title = isEdit ? "Editar Equipo" : "Agregar Equipo";
  return (
    <div
      style={{
        width: "400px",
        padding: "20px",
      }}
    >
      <form>
        <Typography variant="h6">{title}</Typography>
        <FormSection />
        <ButtonActions onCancel={onCancel} />
      </form>
    </div>
  );
}

function RowItemAdd() {
  const [open, setOpen] = React.useState(false);
  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);

  return (
    <>
      <Drawer anchor="right" open={open} onClose={closeForm}>
        <FormPlayer onCancel={closeForm} />
      </Drawer>
      <Card elevation={5} sx={{ maxWidth: 245 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "150px",
            }}
          >
            <Typography variant="h5" component="h2">
              Nuevo Equipo
            </Typography>
            <Fab
              size="large"
              color="primary"
              aria-label="add"
              onClick={openForm}
            >
              <AddIcon />
            </Fab>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

function RowItem({ id }) {
  return (
    <Link href={`/teams/${id}`}>
      <Card elevation={5} sx={{ maxWidth: 245 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h3" align="center">
            Lizard
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

interface TeamsListProps {
  data?: Array<any>;
}
const TeamsList = ({ data }: TeamsListProps) => {
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridAutoFlow: "row dense",
        gridAutoRows: "minmax(min-content, max-content)",
        gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
        width: "100%",
      }}
    >
      <RowItemAdd />
      {data?.map((item, idx) => (
        <RowItem key={idx} id={idx} />
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <Breadcrumbs style={{ padding: "20px 0" }}>
      <Link href="/">Home</Link>
      <Typography color="text.primary" variant="body1">
        Equipos
      </Typography>
    </Breadcrumbs>
  );
};

function Teams() {
  return (
    <Layout>
      <Header />
      <Grid container justifyContent="flex-end">
        <Grid item xs={4}>
          <SearchAppBar />
        </Grid>
      </Grid>
      <TeamsList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    </Layout>
  );
}

export default Teams;

import React from "react";
import { v4 as uuidv4 } from "uuid";
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
import Empty from "../../components/empty";
import { useTeams } from "../../utils/hooks/use-teams";
import { createTeam, Team, updateTeam } from "../../api";
import { useForm, useFormContext, FormProvider } from "react-hook-form";

const FormSection = () => {
  const { register } = useFormContext();

  const data: TextFieldProps[] = [
    {
      label: "name",
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
          //@ts-ignore
          {...register(item?.label)}
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
  const { handleSubmit } = useFormContext();
  const title = isEdit ? "Editar Equipo" : "Agregar Equipo";

  const onSubmit = async (data: any) => {
    const id = uuidv4();
    const team = {
      id,
      ...data,
    };
    try {
      if (isEdit) {
        const resp = await updateTeam(id, team);
        console.log(resp);
      } else {
        const resp = await createTeam(team);
        console.log(resp);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        width: "400px",
        padding: "20px",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

function RowItem({ id, item }) {
  return (
    <Link href={`/teams/${item?.id}`}>
      <Card elevation={5} sx={{ maxWidth: 245 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://marcas-logos.net/wp-content/uploads/2020/02/Real-Madrid-logo.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h3" align="center">
            {item?.name}
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
  const isEmpty = data?.length === 0;

  if (isEmpty || !data) {
    return (
      <>
        <RowItemAdd />
        <Empty />
      </>
    );
  }
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
        <RowItem key={idx} id={idx} item={item} />
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
  const { teamsResults } = useTeams();
  const methods = useForm({
    mode: "onChange",
  });

  return (
    <Layout>
      <FormProvider {...methods}>
        <Header />
        <Grid container justifyContent="flex-end">
          <Grid item xs={4}>
            <SearchAppBar />
          </Grid>
        </Grid>
        <TeamsList data={teamsResults} />
      </FormProvider>
    </Layout>
  );
}

export default Teams;

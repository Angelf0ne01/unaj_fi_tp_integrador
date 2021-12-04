import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { Layout } from "../components";
import {
  Select,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  TextField,
  MenuItem,
  Divider,
  FormControl,
  Button,
  InputLabel,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { ButtonActions } from "../components/ButtonActions";
import { useMatchResults } from "../utils/hooks/use-matchResults";
import { getMatchResults } from "../api/matchResults";

const Header = () => {
  return (
    <Breadcrumbs style={{ padding: "20px 0" }}>
      <Link href="/">Home</Link>
      <Typography color="text.primary" variant="body1">
        Resumen del partido
      </Typography>
    </Breadcrumbs>
  );
};

interface TeamSummary {
  src: string;
  name: string;
}
const TeamSummary = ({ src, name }: TeamSummary) => {
  return (
    <>
      <Avatar src={src} sx={{ border: "1px solid", padding: "10px" }} />
      <Typography variant="body2">{name}</Typography>
    </>
  );
};

const RowItem = () => {
  const img_url_1 =
    "data:image/png;base64,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";
  const img_url_2 =
    "data:image/png;base64,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";

  return (
    <Card elevation={5}>
      <CardContent>
        <Grid container>
          <Grid item container xs={4} justifyContent="center">
            <TeamSummary src={img_url_1} name="Real Madrid" />
          </Grid>
          <Grid
            item
            container
            xs={4}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h6">{"0 - 0"}</Typography>
          </Grid>
          <Grid item container xs={4} justifyContent="center">
            <TeamSummary src={img_url_2} name="Villa Real" />
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <Typography variant="caption">{"finalizado"}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

interface MatchResultListProps {
  data?: Array<any>;
}
const MatchResultsList = ({ data }: MatchResultListProps) => {
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridAutoFlow: "row dense",
        gridAutoRows: "minmax(min-content, max-content)",
        gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
        width: "100%",
      }}
    >
      {data?.map((item, idx) => (
        <RowItem key={idx} />
      ))}
    </div>
  );
};

interface SelectProps {
  label: string;
  value: string;
  default?: boolean;
}

interface SelectFormProps extends FormProps {
  data?: Array<SelectProps>;
  label?: string;
}
const SelectForm = ({ data, label, isEdit }: SelectFormProps) => {
  return (
    <FormControl fullWidth disabled={isEdit}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select fullWidth label={label}>
        {data?.map((item, idx) => (
          <MenuItem key={idx} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

interface FormProps {
  isEdit?: boolean;
}

interface TeamSelectedProps extends FormProps {}

const TeamSelected = ({ isEdit }: TeamSelectedProps) => {
  const label_1 = "Local";
  const label_2 = "Visitante";

  return (
    <Grid container item xs={12}>
      <Grid item xs={5}>
        <SelectForm label={label_1} isEdit={isEdit} />
      </Grid>
      <Grid item xs={2} container alignItems="center" justifyContent="center">
        <Typography variant="h6">{"vs"}</Typography>
      </Grid>
      <Grid item xs={5}>
        <SelectForm label={label_2} isEdit={isEdit} />
      </Grid>
    </Grid>
  );
};

const SelectFormStatus = () => {
  const label = "Estado del partido";
  const data: SelectProps[] = [
    {
      value: "end",
      label: "Finalizado",
    },
    {
      value: "in_progress",
      label: "En progreso",
    },
  ];

  return (
    <Grid container item xs={12}>
      <SelectForm data={data} label={label} />
    </Grid>
  );
};

const TeamQuantity = () => {
  return (
    <Grid container item xs={12}>
      <Grid item xs={5}>
        <TextField label="" type="number" name="Equipo 1" fullWidth />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={5}>
        <TextField label="" type="number" name="Equipo 1" fullWidth />
      </Grid>
    </Grid>
  );
};

const Form = () => {
  const isEdit = true;
  const title = isEdit ? "Editar Partido" : "Nuevo Partido";

  return (
    <Card elevation={5} style={{ padding: 20 }}>
      <Typography variant="h2" component="div">
        {title}
      </Typography>
      <Divider
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
      <form>
        <Grid container spacing={3}>
          <TeamSelected isEdit={isEdit} />
          <TeamQuantity />
          <SelectFormStatus />
          <SelectFormStatus />
          <ButtonActions isEdit={isEdit} />
        </Grid>
      </form>
    </Card>
  );
};
const Home = () => {
  //const { matchResults } = useMatchResults();
  //console.log("matchResults", matchResults);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await getMatchResults();
        console.log("resp",resp);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetch();
  }, []);

  return (
    <Layout>
      <Header />
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Form />
        </Grid>
        <Grid container item xs={8} justifyContent="center" alignItems="center">
          <MatchResultsList
            data={[1, 2, 3, 4, 5, 12, 321, 4, 125, 12, 2, , 3]}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;

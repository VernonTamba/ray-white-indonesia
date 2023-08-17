import React from "react";
import "../styles/News.css";
import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import AddPhotoIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Pasar Saham", "Perekonomian", "Other 1", "Other 2", "Other 3"];

const News = () => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="news">
      <h1 className="news__headerTitle">Add News or Article</h1>
      <div className="news__contents">
        <FormControl fullWidth>
          <InputLabel className="family" id="demo-simple-select-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
            className="family"
          >
            <MenuItem value={10}>Article</MenuItem>
            <MenuItem value={20}>News</MenuItem>
            <MenuItem value={30}>Others</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          placeholder="Write the title of the news"
          className="textField"
          inputProps={{ style: { fontFamily: "Poppins" } }}
          InputLabelProps={{ style: { fontFamily: "Poppins" } }}
        />
        <TextField
          id="standard-basic"
          label="Meta Title"
          variant="standard"
          placeholder="Write the meta title of the news"
          className="textField"
          inputProps={{ style: { fontFamily: "Poppins" } }}
          InputLabelProps={{ style: { fontFamily: "Poppins" } }}
        />
        <TextField
          id="standard-basic"
          label="Meta Desc"
          variant="standard"
          placeholder="Write the description of the news"
          className="textField"
          inputProps={{ style: { fontFamily: "Poppins" } }}
          InputLabelProps={{ style: { fontFamily: "Poppins" } }}
        />
        <TextField
          id="standard-basic"
          label="Slug"
          variant="standard"
          placeholder="Write the slug of the content's URL"
          className="textField"
          inputProps={{ style: { fontFamily: "Poppins" } }}
          InputLabelProps={{ style: { fontFamily: "Poppins" } }}
        />
        <TextField
          id="standard-basic"
          label="Intro"
          variant="standard"
          placeholder="Write an intro to attract readers"
          className="textField"
          inputProps={{ style: { fontFamily: "Poppins" } }}
          InputLabelProps={{ style: { fontFamily: "Poppins" } }}
        />

        <p className="news__coverImageLabel">Cover Image</p>
        <Button
          className="news__addImageButton"
          variant="contained"
          component="label"
        >
          Upload Cover Image <AddPhotoIcon />
          <input type="file" accept="image/png, image/jpeg" hidden />
        </Button>

        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
          placeholder="Start writing here..."
          inputProps={{ style: { fontFamily: "Poppins" } }}
          InputLabelProps={{ style: { fontFamily: "Poppins" } }}
        />

        <FormControl sx={{ my: 5, width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="news__buttons">
        <Button className="news__button" variant="outlined">
          Save as Draft
        </Button>
        <Button className="news__button" variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default News;

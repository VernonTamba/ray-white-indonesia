import React from "react";
import "../styles/User.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PersonAddIcon from "@mui/icons-material/PersonAddAltOutlined";
import { Button, Modal, TextField, Typography } from "@mui/material";
import FilterIcon from "@mui/icons-material/FilterAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const columns = [
  { id: "no", label: "No.", minWidth: 20 },
  { id: "name", label: "Name", minWidth: 200 },
  {
    id: "phone",
    label: "Phone",
    minWidth: 170,
    align: "left",
  },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "left",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "left",
  },
];

function createData(id, name, phone, email, action) {
  return { id, name, phone, email, action };
}

const rows = [
  createData("1", "John Doe", 1324171354, "johndoe@gmail.com", "1"),
  createData("2", "Jessica Ng", 1403500365, "jessicang@gmail.com"),
  createData("3", "Jane Doe", 60483973, "janedoe@gmail.com"),
  createData("4", "Mark Albino", 1321033, "markalbino@gmail.com"),
  createData("5", "Hens Jinco", 6123123983, "hensjinco@gmail.com"),
  createData("6", "Bagas Primo", 12312837, "bagasprimo@gmail.com"),
  createData("7", "Lamma Ginky", 1312380172, "lammaginky@gmail.com"),
  createData("8", "Alvin Chip", 123123033, "alvinchip@gmail.com"),
  createData("9", "Seth Rollins", 123213804, "sethrollins@gmail.com"),
  createData("10", "Lionel Messi", 12312404, "lionelmessi@gmail.com"),
  createData("11", "Kevin Sanjaya", 1412401242, "kevinsanjaya@gmail.com"),
  createData("12", "Roger Federer", 23535942, "rogerfederer@gmail.com"),
  createData("13", "Bastian Verrel", 1309283091, "bastianverrel@gmail.com"),
  createData("14", "Andre Taulany", 756835633, "andretaulany@gmail.com"),
  createData("15", "Elon Musk", 653982141, "elonmusk@gmail.com"),
];

const User = () => {
  // For TABS
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // For TABLE
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // For MODAL
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    fontFamily: "Poppins",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    gap: "2em",
    bgcolor: "#001f2b",
    border: "3px solid #f5f6fa",
    p: 4,
    borderRadius: "1rem",
    color: "#fff",
  };

  return (
    <div className="user">
      {/* TODO: Bring the button to the right side */}
      <Button
        onClick={handleOpen}
        variant="contained"
        startIcon={<PersonAddIcon />}
      >
        Add User
      </Button>
      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Add User
          </Typography>
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            inputProps={{
              style: {
                fontFamily: "Poppins",
                color: "#fff",
              },
            }}
            InputLabelProps={{
              style: {
                fontFamily: "Poppins",
                color: "#fff",
              },
            }}
          />
          <TextField
            id="filled-basic"
            label="Phone"
            variant="filled"
            inputProps={{
              style: {
                fontFamily: "Poppins",
                color: "#fff",
              },
            }}
            InputLabelProps={{
              style: {
                fontFamily: "Poppins",
                color: "#fff",
              },
            }}
          />
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            inputProps={{
              style: {
                fontFamily: "Poppins",
                color: "#fff",
              },
            }}
            InputLabelProps={{
              style: {
                fontFamily: "Poppins",
                color: "#fff",
              },
            }}
          />
          <Button
            onClick={handleOpen}
            variant="contained"
            startIcon={<AddCircleIcon />}
          >
            Add
          </Button>
        </Box>
      </Modal>
      <div className="user__mainContent">
        <div className="user__search">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SearchIcon
              sx={{
                color: "action.active",
                mr: 1,
                my: 0.5,
              }}
            />
            <TextField
              id="input-with-sx"
              label="Enter Keyword"
              variant="standard"
              inputProps={{ style: { fontFamily: "Poppins" } }}
              InputLabelProps={{ style: { fontFamily: "Poppins" } }}
            />
          </Box>
          <Button variant="outlined" startIcon={<FilterIcon />}>
            Filters
          </Button>
        </div>
        {/* TABS */}
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Customer" value="1" />
                <Tab label="Author" value="2" />
                <Tab label="Super Admin" value="3" />
                <Tab label="BDE" value="4" />
                <Tab label="Advisor" value="5" />
                <Tab label="Admin Office" value="6" />
                <Tab label="Principal" value="7" />
                <Tab label="Principal LMI" value="8" />
                <Tab label="Bank Officer" value="9" />
                <Tab label="Bank Admin" value="10" />
                <Tab label="Bank Principal" value="11" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {/* TABLE */}
              <Paper sx={{ width: "100%" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: "bold",
                            backgroundColor: "#022b3a",
                            color: "#fff",
                          }}
                          align="center"
                          colSpan={2}
                        >
                          Customer
                        </TableCell>
                        <TableCell
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: "bold",
                            backgroundColor: "#022b3a",
                            color: "#fff",
                          }}
                          align="center"
                          colSpan={3}
                        >
                          Details
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              top: 57,
                              minWidth: column.minWidth,
                              fontFamily: "Poppins",
                              backgroundColor: "#022b3a",
                              color: "#fff",
                            }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </TabPanel>
            <TabPanel value="2">No table added yet.</TabPanel>
            <TabPanel value="3">No table added yet.</TabPanel>
            <TabPanel value="4">No table added yet.</TabPanel>
            <TabPanel value="5">No table added yet.</TabPanel>
            <TabPanel value="6">No table added yet.</TabPanel>
            <TabPanel value="7">No table added yet.</TabPanel>
            <TabPanel value="8">No table added yet.</TabPanel>
            <TabPanel value="9">No table added yet.</TabPanel>
            <TabPanel value="10">No table added yet.</TabPanel>
            <TabPanel value="11">No table added yet.</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default User;

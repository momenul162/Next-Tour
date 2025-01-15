import { Typography, Table, TableBody, TableCell, TableRow, TableContainer } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const DescriptionTable = ({ name }) => {
  const includedItems = [
    "Air fares",
    "4 Nights Hotel Accommodation",
    "Entrance Fees",
    "Tour Guide",
  ];
  const excludedItems = ["Air fares", "Air fares", "Air fares", "Air fares"];

  return (
    <TableContainer
      sx={{
        maxWidth: 600,
        margin: "auto",
        mt: 5,
        border: "2px solid #ddd",
        borderRadius: 1,
      }}
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Destination:
              </Typography>
            </TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Departure:
              </Typography>
            </TableCell>
            <TableCell>Yes Required</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Departure Time:
              </Typography>
            </TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Return Time:
              </Typography>
            </TableCell>
            <TableCell>English & Spanish</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Included:
              </Typography>
            </TableCell>
            <TableCell>
              {includedItems.map((item, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <CheckIcon color="success" /> {item}
                </Typography>
              ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Excluded:
              </Typography>
            </TableCell>
            <TableCell>
              {excludedItems.map((item, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <CloseIcon color="error" /> {item}
                </Typography>
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DescriptionTable;

// CreateMenu Component with MUI Dialog box

import config from "@/config";
import { useAppDispatch } from "@/store/hooks";
import { setMenus } from "@/store/slices/menuSlice";
import { CreateMenuPayload } from "@/types/menu";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const defaultNewMenu = {
  name: "",
  price: 0,
  assetUrl: "",
};
const CreateMenu = ({ open, setOpen }: Props) => {
  const [newMenu, setNewMenu] = useState<CreateMenuPayload>(defaultNewMenu);
  const dispatch = useAppDispatch();

  //Create menu function
  const createMenu = async () => {
    const response = await fetch(`${config.apiBaseUrl}/menu`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMenu),
    });
    const menus = await response.json();
    dispatch(setMenus(menus));
    //update menus
    setNewMenu(defaultNewMenu);

    //close dialog box
    setOpen(false);
  };

  //update menu function
  const updateMenu = async () => {
    const menuToUpdate = { id: 3, name: "gin tote", price: 50000 };
    const response = await fetch("http://localhost:5000/menu", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(menuToUpdate),
    });
    const dataFromServer = await response.json();
    console.log("dataFromServer: ", dataFromServer);
  };

  //delete menu function
  const deleteMenu = async () => {
    const menuIdToDelete = [1, 2, 3];
    const response = await fetch(
      `http://localhost:5000/menu/${menuIdToDelete}`,
      {
        method: "DELETE",
      }
    );
    const dataFromServer = await response.json();
    console.log("dataFromServer: ", dataFromServer);
  };

  //use function on change name
  const handleNameUpdate = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewMenu({ price: newMenu.price, name: evt.target.value });
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Create menu</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            defaultValue={newMenu.name}
            sx={{ width: 300, mb: 2 }}
            placeholder="Name"
            onChange={handleNameUpdate}
          />
          <TextField
            defaultValue={newMenu.price}
            sx={{ width: 300, mb: 4 }}
            placeholder="Price"
            onChange={(evt) =>
              setNewMenu({
                name: newMenu.name,
                price: Number(evt.target.value),
              })
            }
          />
          <Button
            variant="contained"
            sx={{ width: "fit-content" }}
            onClick={createMenu}
          >
            Create
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMenu;

import BackofficeLayout from "@/components/backofficeLayout";
import MenuCard from "@/components/menuCard/MenuCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import CreateMenu from "../../../components/createMenu/CreateMenu";

const MenuPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menus = useAppSelector((store) => store.menu.items);
  const dispatch = useAppDispatch();

  // call fetchMenus function once at first rendering
  useEffect(() => {
    //fetchMenus();
  }, []);

  return (
    <BackofficeLayout>
      <Box sx={{ mr: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* button to show CreateMenu's Dialog */}
          <Button variant="contained" onClick={() => setOpen(true)}>
            Create menu
          </Button>
        </Box>

        {/* render CreateMenu Component */}
        <CreateMenu open={open} setOpen={setOpen} />

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {/* display menu with MenuCard */}
          {menus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </Box>
      </Box>
    </BackofficeLayout>
  );
};

export default MenuPage;

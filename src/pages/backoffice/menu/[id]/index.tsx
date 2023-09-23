import BackofficeLayout from "@/components/backofficeLayout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateMenu } from "@/store/slices/menuSlice";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const UpdateMenu = () => {
  const [name, setName] = useState<string>("");
  const menus = useAppSelector((state) => state.menu.items);
  const router = useRouter();
  const menuId = Number(router.query.id);
  const menu = menus.find((item) => item.id === menuId);
  const dispatch = useAppDispatch();
  return (
    <BackofficeLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: 400,
        }}
      >
        <TextField
          id=""
          label="Name"
          variant="outlined"
          defaultValue={menu?.name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <Button
          sx={{ width: "fit-content", mt: 2 }}
          variant="contained"
          onClick={() => dispatch(updateMenu({ id: menuId, name }))}
        >
          Update
        </Button>
      </Box>
    </BackofficeLayout>
  );
};

export default UpdateMenu;

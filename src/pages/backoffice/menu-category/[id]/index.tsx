import BackofficeLayout from "@/components/backofficeLayout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateMenuCategory } from "@/store/slices/menuCategorySlice";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const UpdateMenuCategory = () => {
  const [name, setName] = useState<string>("");
  const menuCategories = useAppSelector((state) => state.menuCategory.items);
  const router = useRouter();
  const menuCategoryId = Number(router.query.id);
  const menuCategory = menuCategories.find(
    (item) => item.id === menuCategoryId
  );
  const dispatch = useAppDispatch();
  if (!menuCategoryId) return null;
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
          label="Price"
          variant="outlined"
          defaultValue={menuCategory?.name}
          sx={{ mt: 2 }}
          onChange={(evt) => setName(evt.target.value)}
        />
        <Button
          sx={{ width: "fit-content", mt: 2 }}
          variant="contained"
          onClick={() => {
            dispatch(updateMenuCategory({ id: menuCategoryId, name }));
          }}
        >
          Update
        </Button>
      </Box>
    </BackofficeLayout>
  );
};

export default UpdateMenuCategory;

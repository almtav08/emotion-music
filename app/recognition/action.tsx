'use server'

import { nets } from "face-api.js";

export async function loadModels() {
  // Ruta a los modelos

  // Cargar los modelos necesarios
    await nets.faceExpressionNet.loadFromUri("../public/models");
    console.log("Modelos cargados");
}
    
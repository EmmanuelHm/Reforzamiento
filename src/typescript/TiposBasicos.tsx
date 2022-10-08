export const TiposBasicos = () => {

    const nombre: string = "Emmanuel";
    const edad: number = 24;
    const activo: boolean = false;

    const poderes: string[] = ['Velocidad', 'Volar', 'Rayos X'];

  return (
    <>
        <h3>Tipos Básicos</h3>
        { nombre }, { edad }, { (activo) ? 'activo' : 'no activo' }
        <br/>
        { (poderes.join(',')) }
    </>
  )
}

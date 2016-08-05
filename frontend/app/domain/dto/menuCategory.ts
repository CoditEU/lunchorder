export class MenuCategory implements app.domain.dto.IMenuCategory, Serializable<MenuCategory> {
    id: string;
    name: string;
    description: string;
    subCategories: MenuCategory[];

    deserialize(input: any): MenuCategory {
        this.id = input.id;
        this.name = input.name;
        this.description = input.description;

        this.subCategories = new Array<MenuCategory>();
        for (var subCategory in input.subCategories) {
            this.subCategories.push(new MenuCategory().deserialize(subCategory));
        }

        return this;
    }
}
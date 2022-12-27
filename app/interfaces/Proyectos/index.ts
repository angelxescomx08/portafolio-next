export interface Proyectos {
    id:             number;
    date:           Date;
    date_gmt:       Date;
    guid:           GUID;
    modified:       Date;
    modified_gmt:   Date;
    slug:           string;
    status:         string;
    type:           string;
    link:           string;
    title:          GUID;
    content:        Content;
    featured_media: number;
    template:       string;
    meta:           any[];
    tecnologias:    number[];
    acf:            Acf;
    _links:         Links;
}

export interface Links {
    self:            About[];
    collection:      About[];
    about:           About[];
    "wp:attachment": About[];
    "wp:term":       WpTerm[];
    curies:          Cury[];
}

export interface About {
    href: string;
}

export interface Cury {
    name:      string;
    href:      string;
    templated: boolean;
}

export interface WpTerm {
    taxonomy:   string;
    embeddable: boolean;
    href:       string;
}

export interface Acf {
    nombre:                      string;
    descripcion_del_proyecto:    string;
    imagenes:                    Imagenes;
    link_a_github:               string;
    link_al_deploy_del_proyecto: string;
}

export interface Imagenes {
    imagen_1: Imagen;
    imagen_2: Imagen;
}

export interface Imagen {
    ID:          number;
    id:          number;
    title:       string;
    filename:    string;
    filesize:    number;
    url:         string;
    link:        string;
    alt:         string;
    author:      string;
    description: string;
    caption:     string;
    name:        string;
    status:      Status;
    uploaded_to: number;
    date:        Date;
    modified:    Date;
    menu_order:  number;
    mime_type:   MIMEType;
    type:        Type;
    subtype:     Subtype;
    icon:        string;
    width:       number;
    height:      number;
    sizes:       Sizes;
}

export enum MIMEType {
    ImageWebp = "image/webp",
}

export interface Sizes {
    thumbnail:             string;
    "thumbnail-width":     number;
    "thumbnail-height":    number;
    medium:                string;
    "medium-width":        number;
    "medium-height":       number;
    medium_large:          string;
    "medium_large-width":  number;
    "medium_large-height": number;
    large:                 string;
    "large-width":         number;
    "large-height":        number;
    "1536x1536":           string;
    "1536x1536-width":     number;
    "1536x1536-height":    number;
    "2048x2048":           string;
    "2048x2048-width":     number;
    "2048x2048-height":    number;
}

export enum Status {
    Inherit = "inherit",
}

export enum Subtype {
    Webp = "webp",
}

export enum Type {
    Image = "image",
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export interface GUID {
    rendered: string;
}

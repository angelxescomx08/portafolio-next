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
    tecnologias:    string[];
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
    imagen_1: string;
    imagen_2: string;
    imagen_3: string;
    imagen_4: string;
    imagen_5: string;
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export interface GUID {
    rendered: string;
}

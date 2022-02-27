import baseHandler from './client/handlers/_';
import danbooru from './client/danbooru';
import e621 from './client/e621';
import konachan from './client/konachan';
import rule34 from './client/rule34';
import yandere from './client/yandere';
declare const _default: {
    baseHandler: typeof baseHandler;
    danbooru: typeof danbooru;
    e621: typeof e621;
    konachan: typeof konachan;
    rule34: typeof rule34;
    yandere: typeof yandere;
    node_fetch_version: string;
    fast_xml_parser_version: string;
};
export = _default;

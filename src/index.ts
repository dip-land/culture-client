import baseHandler from './client/handlers/_';
import danbooru from './client/danbooru';
import e621 from './client/e621';
import konachan from './client/konachan';
import rule34 from './client/rule34';
import yandere from './client/yandere';
import NF_PackageJSON from 'node-fetch/package.json';
import FXP_PackageJSON from 'fast-xml-parser/package.json';

export = {
	baseHandler,
    danbooru,
    e621,
    konachan,
    rule34,
    yandere,
    node_fetch_version: NF_PackageJSON.version,
    fast_xml_parser_version: FXP_PackageJSON.version,
}

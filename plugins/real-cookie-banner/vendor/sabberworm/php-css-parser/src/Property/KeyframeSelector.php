<?php

namespace DevOwl\RealCookieBanner\Vendor\Sabberworm\CSS\Property;

class KeyframeSelector extends \DevOwl\RealCookieBanner\Vendor\Sabberworm\CSS\Property\Selector
{
    /**
     * regexp for specificity calculations
     *
     * @var string
     */
    const SELECTOR_VALIDATION_RX = '/
    ^(
        (?:
            [a-zA-Z0-9\\x{00A0}-\\x{FFFF}_^$|*="\'~\\[\\]()\\-\\s\\.:#+>]* # any sequence of valid unescaped characters
            (?:\\\\.)?                                              # a single escaped character
            (?:([\'"]).*?(?<!\\\\)\\2)?                              # a quoted text like [id="example"]
        )*
    )|
    (\\d+%)                                                          # keyframe animation progress percentage (e.g. 50%)
    $
    /ux';
}
